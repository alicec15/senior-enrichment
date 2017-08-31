import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchPostCampus, writeCampus } from '../reducers/index';
// import store from '../store'

function NewCampus(props) {
    return (
        <div>
            
            <form onSubmit={props.handleSubmit}> 
                <div className='form-group'>
                <label htmlFor='name'>Add New Campus </label>
                <input 
                    className='form-control' 
                    type='text' 
                    name='campusName' 
                    placeholder='Enter campus name' 
                    value={props.newCampus}
                    onChange={props.handleChange}/>
                </div>
                <div className='form-group'>
                    <button type='submit' className='btn btn-default'>Create Campus</button>
                </div>
            </form>

        </div>
    )
    
}

const mapStateToProps = (state) => {
    return {
        newCampus: state.newCampus,
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {

    return {
        handleChange: function(evt) {
            dispatch(writeCampus(evt.target.value))
        }, 
        handleSubmit: function(evt) {
            evt.preventDefault();
            const campus = evt.target.campusName.value;
            dispatch(fetchPostCampus({ name: campus }))
                .then(camp => ownProps.history.push(`/campus/${camp.id}`))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewCampus)