import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
//import socket from '../socket';

//action constants
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';

//action types
export const getAllStudents = (students) => {
    return {type: GET_ALL_STUDENTS, students}
}

//thunk
export function fetchStudents () {
    
      return function thunk (dispatch) {
        return axios.get('/api/student')
          .then(res => res.data)
          .then(students => {
            const action = getAllStudents(students);
            dispatch(action);
          });
    };
}

//reducer 
export default function allStudentReducer (state = [], action){
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return action.students
        default:
            return state 
    }
}

