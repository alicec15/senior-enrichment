import axios from 'axios';
import thunkMiddleware from 'redux-thunk';

//const
const GET_CAMPUS = 'GET_CAMPUS';
// const GET_CAMP_STUD = 'GET_CAMP_STUD';

//action type
export const getCampus = (campus) => {
    return {type: GET_CAMPUS, campus}
}
// export const getCampusStudents = (campStud) => {
//     return {type: GET_CAMP_STUD, campStud}
// }

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

// export function fetchCampusStud(campusId) {
//     return function thunk(dispatch) {
//         return axios.get(`/api/campus/student/${campusId}`)
//             .then(res => console.log('hi', res))
//             // .then(students => {
//             //     console.log('FETCHTHUNK', students)
//             //     const action = getCampusStudents(students);
//             //     dispatch(action)
//             // })

//     }
// }

export default function campusReducer (state = '', action) {
    switch (action.type) {
        case GET_CAMPUS:
            return action.campus
        // case GET_CAMP_STUD:
        //     return action.campStud
        default:
            return state
    }
}
