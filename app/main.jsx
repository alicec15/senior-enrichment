'use strict'
import React from 'react'
import {render} from 'react-dom'
import { Provider } from 'react-redux'

import store from './store'
import Root from './components/Root'
import AllCampueses from './components/AllCampueses'

//same as ReactDOM
render (
  <Provider store={store}>
    <Root/>
    <AllCampuses />
  </Provider>,
  document.getElementById('main')
)