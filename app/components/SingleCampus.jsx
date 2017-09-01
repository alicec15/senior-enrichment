import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import store from '../store'
import { fetchOneCampus, fetchCampusStud } from '../reducers/index';
import UpdateCampus from './UpdateCampus'

class SingleCampus extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.handleOneCampus(this.props.match.params.campusId)
    }
    
    render() {
        const { campus, students } = this.props;
        const id = Number(this.props.match.params.campusId)
        const filteredStudents = students.filter(student => student.campusId === id)

        return (
            <ul>
                <h1>{campus.name}</h1>
                <img src={campus.image}></img>
                    
                {filteredStudents.map(student=> {
            
                    return (
                        <li key={student.id}>
                            <NavLink to={`/students/${student.id}`} activeClassName='active'>
                                <span>{student.name}</span>
                                {/* <span>{stud.email}</span> */}
                            </NavLink>
                        </li>
                    )
                })}
                <li><UpdateCampus campus={campus} history={this.props.history}/> </li>
                
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        campus: state.campus,
        students: state.students
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleOneCampus: (id) => {
            dispatch(fetchOneCampus(id))
            // dispatch(fetchCampusStud(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);