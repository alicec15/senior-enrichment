import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
//import socket from '../socket';

//action constants
const GET_ALL_CAMPUSES = 'GET_ALL_CAMPUSES';
const GET_NEW_CAMPUS = 'GET_NEW_CAMPUS';

//action types
export const getAllCampuses = (campuses) => {
    return {type: GET_ALL_CAMPUSES, campuses}
}
export const getNewCampus = (campus) => {
    return {type: GET_NEW_CAMPUS, campus}
}


export function fetchCampuses () {
    
      return function thunk (dispatch) {
        return axios.get('/api/campus')
          .then(res => res.data)
          .then(campuses => {
            const action = getAllCampuses(campuses);
            dispatch(action);
          });
    };
}

export function fetchPostCampus (campus) {
    return function thunk (dispatch) {
        return axios.post('/api/campus', campus)
            .then(res => res.data)
            .then(response => {
                const action = getNewCampus(response.campus);
                dispatch(action);
                return response.campus
            })
    }
}

export function updateCampus (campus, id) {
    return function thunk (dispatch) {
        return axios.put(`/api/campus/${id}`, campus)
        .then(res => res.data)
        .then(campus => campus)
    }
}

//reducer 
export default function allCampusReducer (state = [], action){
    switch (action.type) {
        case GET_ALL_CAMPUSES:
            return action.campuses
        case GET_NEW_CAMPUS:
            return [...state, action.campus]
        default:
            return state 
    }
}

