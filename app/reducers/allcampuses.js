import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
//import socket from '../socket';

//action constants
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';

//action types
export const getAllCampuses = (campuses) => {
    return {type: GET_ALL_CAMPUSES, campuses}
}

export function fetchCampuses () {
    
      return function thunk (dispatch) {
        return axios.get('/api/campus')
          .then(res => res.data)
          .then(campuses => {
            console.log(campuses, 'hi')
            const action = getAllCampuses(campuses);
            console.log('this is action---->', action)
            dispatch(action);
          });
      };
    }

//reducer 
export default function allCampusReducer (state = [], action){
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return action.campuses
        default:
            return state 
    }
}

