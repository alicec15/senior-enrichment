// work on this last


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Router } from 'react-router';
import { Route, Switch } from 'react-router-dom';

class Routes extends Component {

//   componentDidMount () {
//     this.props.fetchInitialData();
//   }

  render () {
    return (
      <Router history={history}>
        <Root>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/users" component={UserList} />
            <Route path="/users/:id" component={UserDetail} />
            <Route exact path="/stories" component={StoryList} />
            <Route path="/stories/:id" component={StoryDetail} />
            <Route component={Home} />
          </Switch>
        </Root>
      </Router>
    );
  }
}