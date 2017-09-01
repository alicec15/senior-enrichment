import axios from 'axios';
import thunkMiddleware from 'redux-thunk';
//import socket from '../socket';

//action constants
const GET_ALL_STUDENTS = 'GET_ALL_STUDENTS';
const GET_NEW_STUDENT = 'GET_NEW_STUDENT';

//action types
export const getAllStudents = (students) => {
    return {type: GET_ALL_STUDENTS, students}
}
export const getNewStudent = (student) => {
    return {type: GET_NEW_STUDENT, student}
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

export function fetchPostStudent (student) {
    return function thunk (dispatch) {
        return axios.post('/api/student', student)
            .then(res => res.data)
            .then(student => {
                const action = getNewStudent(student);
                dispatch(action);
                return student
            })
    }
}

export function updateStudent (student, id) {
    return function thunk (dispatch) {
        return axios.put(`/api/student/${id}`, student)
            .then (res => res.data)
            .then(student => student)
    }
}

//reducer 
export default function allStudentReducer (state = [], action){
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return action.students
        case GET_NEW_STUDENT:
            return [...state, action.student]
        default:
            return state 
    }
}

