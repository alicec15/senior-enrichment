import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import store from '../store'

class AllStudents extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { students } = this.props;

        return (
            <ul>
                <h2>STUDENTS: <NavLink to={`/students/add`} activeClassName='active'><button onClick=''>+</button></NavLink></h2>
                {students.map(student => {
                    return (
                        <li key={student.id}>
                            <NavLink to={`/students/${student.id}`} activeClassName='active'>
                                <span>{student.name}</span>
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        students: state.students,
    }
}

export default connect(mapStateToProps)(AllStudents)