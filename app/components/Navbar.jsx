import React from 'react';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';


export default function Navbar(props) {

  return (
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <NavLink to={`/`} activeClassName='active' className="nav-link"><button>CAMPUS</button></NavLink>
      <NavLink to={`/students`} activeClassName='active' className="nav-link"><button>STUDENT</button></NavLink>
    </nav>
  )
}

