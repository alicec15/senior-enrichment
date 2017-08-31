import axios from 'axios';
import thunkMiddleware from 'redux-thunk';


//const
const GET_STUDENT = 'GET_STUDENT';
const GET_STUD_CAMP = 'GET_STUD_CAMP';

//action type
export const getStudent = (student) => {
    return {type: GET_STUDENT, student}
}
export const getStudCamp = (oneCamp) => {
    return {type: GET_STUD_CAMP, oneCamp}
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
// export function fetchStudCamp(studentId) {
//     return function thunk(dispatch){
//         return axios.get(`/api/student/campus/${studentId}`)
//             .then(res => res.data)
//             .then(campus => {
//                 const action = getStudCamp(campus);
//                 dispatch(action)
//             })
//     }
// }

export default function studentReducer (state = '', action) {
    switch (action.type) {
        case GET_STUDENT:
            return action.student
        case GET_STUD_CAMP:
            return action.oneCamp
        default:
            return state
    }
}
