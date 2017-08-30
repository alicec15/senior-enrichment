import { createStore, applyMiddleware, combineReducers } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';


//subreducers
import campuses from './allcampuses';
import students from './allstudents'

//combining subreducers
const reducer = combineReducers({campuses, students});

export default reducer;
export * from './allcampuses'
export * from './allstudents'




// const initialState = {}

// const rootReducer = function(state = initialState, action) {
//   switch(action.type) {
//     default: return state
//   }
// };

// export default rootReducer
