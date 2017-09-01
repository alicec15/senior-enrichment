import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import { updateStudent, fetchOneStudent } from '../reducers/index';

function UpdateStudent(props) {
    return (
        <div>
            
            <form onSubmit={props.handleSubmit}> 
                <div className='form-group'>
                <label htmlFor='name'>Update student:  </label> <br></br>
                <label>Name: </label>
                    <input 
                    className='form-control' 
                    type='text' 
                    name='studentName' 
                    placeholder='Enter name' 
                    />
                
                <label>Email: </label>
                    <input 
                    className='form-control' 
                    type='text' 
                    name='studentEmail' 
                    placeholder='Enter email' 
                    />
                
                <label>Campus: </label>
                    <select 
                    name='studentcampus'>
                    {props.campuses.length && props.campuses.map(campus => {
                        return (
                            <option key={campus.id} value={campus.id}>{campus.name}</option>
                        )
                    })}
                    </select>
                

                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-default'>Update Student</button>
                </div>
            </form>

        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses,
        student: state.student
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps, 'ownprops')
    return {
        handleSubmit: function(evt) {
            evt.preventDefault();
            const name = evt.target.studentName.value;
            const email = evt.target.studentEmail.value;
            const campusId = evt.target.studentcampus.value;
            const id = ownProps.student.id
            dispatch(updateStudent({ name, email, campusId }, id))
            dispatch(fetchOneStudent(id))
            
        
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateStudent)