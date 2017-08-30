import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { fetchCampuses, fetchStudents } from '../reducers/index';
import store from '../store';
import { connect } from 'react-redux';
import AllCampuses from './AllCampuses';
import AllStudents from './AllStudents';

export default class Main extends Component {

  componentDidMount () {
    store.dispatch(fetchCampuses());
    store.dispatch(fetchStudents())
  }

  render () {
    return (
      <div>
            <Switch>
                <Route exact path="/" component={AllCampuses} /> 
                <Route exact path='/students' component={AllStudents} />
            </Switch>
      </div>
    );
  }
}