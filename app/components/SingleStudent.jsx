import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import { fetchOneStudent, fetchCampfromStud } from '../reducers/index';
import UpdateStudent from './UpdateStudent'

class SingleStudent extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.handleOneStudent(Number(this.props.match.params.studentId));
        this.props.handleCampusfromStudent(Number(this.props.match.params.studentId));
    }
    
    render() {
        const { student, campus } = this.props;

        return (
            <ul>
                <h1>{student.name}</h1>
                <li><b>Email:</b> {student.email}</li>   
                <li><b>Campus: </b><NavLink to={`/campus/${campus.id}`} activeClassName='active'>{campus.name}</NavLink></li>
                <button >Update Student</button>
                <li> <UpdateStudent student={student} history={this.props.history}/> </li>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        student: state.student,
        campus: state.campus
        
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOneStudent: (id) => {
            dispatch(fetchOneStudent(id))
        },
        handleCampusfromStudent: (id) => {
            dispatch(fetchCampfromStud(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);