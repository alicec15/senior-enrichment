import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import { fetchOneStudent } from '../reducers/index';

class SingleStudent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleOneStudent(this.props.match.params.studentId)
    }
    
    render() {
        const { student } = this.props;

        return (
            <ul>
                <h1>{student.name}</h1>
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        student: state.student
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOneStudent: (id) => {
            dispatch(fetchOneStudent(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);