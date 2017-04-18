import {
  ADD_PERSON,
  TOGGLE_ADD_PERSON_PANEL,
  DELETE_RECORDS,
  SET_FOR_DELETE,
  UNSET_FOR_DELETE,
  RESET_SET_FOR_DELETE_ARRAY
} from '../constants/actionTypes';
import initialState from './initialState';

export default function formReducer(state = initialState.form, action) {
  let filteredPeople;

  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, { people: [ ...state.people, action.newPerson] });
    case TOGGLE_ADD_PERSON_PANEL:
      return Object.assign({}, state, {addPersonPanel: !state.addPersonPanel});
    case SET_FOR_DELETE:
      return Object.assign({}, state, { setForDeleteArr: [ ...state.setForDeleteArr, action.personId]});
    case UNSET_FOR_DELETE:
      filteredPeople = state.setForDeleteArr.filter((personId) => {
        return action.personId !== personId ? true : false;
      });

      return Object.assign({}, state, { setForDeleteArr: filteredPeople});
    case RESET_SET_FOR_DELETE_ARRAY:
      return Object.assign({}, state, { setForDeleteArr: [] });
    case DELETE_RECORDS:
      filteredPeople = state.people.filter((person) => {
        return state.setForDeleteArr.indexOf(person._id) === -1 ? true : false;
      }); // end filter

      return Object.assign({}, state, { people: filteredPeople}, { setForDeleteArr: [] });
    default:
      return state;
  }

}
