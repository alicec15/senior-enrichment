const WRITE_STUDENT = 'WRITE_STUDENT';

export function writeStudent(newStudent) {
  const action = {type: WRITE_STUDENT, newStudent}
  return action
}

export default function newStudentReducer (state = '', action) {
  switch (action.type) {
    case WRITE_STUDENT:
      return action.newStudent

    default:
      return state
  }
}