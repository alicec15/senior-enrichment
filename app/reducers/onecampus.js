import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

//const
const GET_CAMPUS = 'GET_CAMPUS';
const GET_CAMP_STUD = 'GET_CAMP_STUD';

//action type
export const getCampus = (campus) => {
    return {type: GET_CAMPUS, campus}
}
export const getCampusStudents = (campus) => {
    return {type: GET_CAMP_STUD, campus}
}

//thunk
export function fetchOneCampus(campusId) {
    return function thunk(dispatch) {
        return axios.get(`/api/campus/${campusId}`)
            .then(res => res.data)
            .then(campus => {
                const action = getCampus(campus);
                dispatch(action)
            })
    }   
}

export function fetchCampfromStud(studentId) {
    return function thunk(dispatch){
        return axios.get(`/api/student/campus/${studentId}`)
            .then(res => res.data)
            .then(campus => {
                const action = getCampusStudents(campus);
                dispatch(action)
            })
    }
}

export default function campusReducer (state = '', action) {
    switch (action.type) {
        case GET_CAMPUS:
            return action.campus
        case GET_CAMP_STUD:
            return action.campus
        default:
            return state
    }
}
