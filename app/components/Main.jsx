import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchCampuses, fetchStudents } from '../reducers/index';
import store from '../store';
import { connect } from 'react-redux';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';
import SingleStudent from './SingleStudent';
import SingleCampus from './SingleCampus';
import Navbar from './Navbar';

export default class Main extends Component {

  componentDidMount () {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents())
  }

  render () {
    return (
      <div>
          <Navbar />
            <main>
            <Switch>
                <Route exact path="/" component={AllCampuses} /> 
                <Route exact path='/students' component={AllStudents} />
                <Route path='/students/:studentId' component={SingleStudent} />
                <Route path='/campus/:campusId' component={SingleCampus} />
            </Switch>
            </main>
      </div>
    );
  }
}