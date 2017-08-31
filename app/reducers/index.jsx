import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


//subreducers
import campuses from './allcampuses';
import students from './allstudents';
import student from './onestudent';
import campus from './onecampus';
import newCampus from './newcampus';


//combining subreducers
const reducer = combineReducers({campuses, students, student, campus, newCampus});

export default reducer;
export * from './allcampuses'
export * from './allstudents'
export * from './onestudent'
export * from './onecampus'
export * from './newcampus'

