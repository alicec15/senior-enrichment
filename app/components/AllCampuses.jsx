import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
// import store from '../store'

class AllCampuses extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { campuses } = this.props;

        return (
            <ul>
                {campuses.map(campus => {
                    return (
                        <li key={campus.id}>
                            <NavLink to={`/campus/${campus.id}`} activeClassName='active'>
                                <span>{campus.name}</span>
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
        campuses: state.campuses,
    }
}

export default connect(mapStateToProps)(AllCampuses)