import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import { updateCampus, fetchOneCampus } from '../reducers/index';

function UpdateCampus(props) {
    console.log(props, 'props')
    return (
        <div>
            
            <form onSubmit={props.handleSubmit}> 
                <div className='form-group'>
                <label htmlFor='name'>Update Campus </label>
                <input 
                    className='form-control' 
                    type='text' 
                    name='campusName' 
                    placeholder='Enter campus name' />
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-default'>Update Campus</button>
                </div>
            </form>

        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        campus: state.campus,
        students: state.students
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    console.log(ownProps, 'ownprops')
    return {
        handleSubmit: function(evt) {
            evt.preventDefault();
            const name = evt.target.campusName.value;
            const id = ownProps.campus.id
            console.log(id, 'this is my id')
            dispatch(updateCampus({ name }, id))
            dispatch(fetchOneCampus(id))
            
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateCampus)