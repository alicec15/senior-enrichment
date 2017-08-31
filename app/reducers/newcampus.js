const WRITE_CAMPUS = 'WRITE_CAMPUS';

export function writeCampus(newCampus) {
  const action = {type: WRITE_CAMPUS, newCampus}
  return action
}

export default function newCampusReducer (state = '', action) {
  switch (action.type) {
    case WRITE_CAMPUS:
      return action.newCampus

    default:
      return state
  }
}