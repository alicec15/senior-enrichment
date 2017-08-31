import axios from 'axios';
import thunkMiddleware from 'redux-thunk';


//const
const GET_STUDENT = 'GET_STUDENT';

//action type
export const getStudent = (student) => {
    return {type: GET_STUDENT, student}
}

//thunk
export function fetchOneStudent(studentId) {
    return function thunk(dispatch) {
        return axios.get(`/api/student/${studentId}`)
            .then(res => res.data)
            .then(student => {
                const action = getStudent(student);
                dispatch(action)
            })
    }
}

export default function studentReducer (state = '', action) {
    switch (action.type) {
        case GET_STUDENT:
            return action.student
        default:
            return state
    }
}
