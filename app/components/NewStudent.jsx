import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import {  fetchPostStudent } from '../reducers/index';
// import store from '../store'

function NewStudent(props) {
    return (
        <div>
            
            <form onSubmit={props.handleSubmit}> 
                <div className='form-group'>
                <label htmlFor='name'>Add New Person </label>
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
                        return (<option key={campus.id} value={campus.id}>{campus.name}</option>)
                    })}
                    </select>
                

                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-default'>Create Student</button>
                </div>
            </form>

        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleSubmit: function(evt) {
            evt.preventDefault();
            const name = evt.target.studentName.value;
            const email = evt.target.studentEmail.value;
            const campusId = evt.target.studentcampus.value;
            dispatch(fetchPostStudent({ name, email, campusId }))
               .then(student => ownProps.history.push(`/students/${student.id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewStudent)