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
                {students.map(student => {
                    return (
                        <li key={student.id}>
                            <NavLink to={`/student/${student.id}`} activeClassName='active'>
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