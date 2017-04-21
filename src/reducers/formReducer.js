import {
  ADD_PERSON,
  DELETE_RECORDS,
  RESET_SET_FOR_DELETE_ARRAY,
  SET_FOR_DELETE,
  SET_FOR_UPDATE,
  TOGGLE_ADD_PERSON_PANEL,
  TOGGLE_UPDATE_PANEL,
  UNSET_FOR_DELETE,
  UPDATE_RECORD,
} from '../constants/actionTypes';

import initialState from './initialState';

export default function formReducer(state = initialState.form, action) {
  let filteredPeople;

  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, { people: [ ...state.people, action.newPerson] });
    case TOGGLE_ADD_PERSON_PANEL:
      return Object.assign({}, state, {addPersonPanel: !state.addPersonPanel});
    case TOGGLE_UPDATE_PANEL: // take the user ID as a value and store it, if it's the same toggle and if not don't
      // add person id to the place where the form is submitted, as well.
      // basically the focus person is the "close button"
      return Object.assign({}, state, { updatePersonPanel: !state.updatePersonPanel })
    case SET_FOR_DELETE:
      return Object.assign({}, state, { setForDeleteArr: [ ...state.setForDeleteArr, action.personId]});
    case SET_FOR_UPDATE:
      return state.updatePersonPanel ? Object.assign({}, state, { personToUpdate: action.person }) : state;
    case UNSET_FOR_DELETE:
      filteredPeople = state.setForDeleteArr.filter((personId) => {
        return action.personId !== personId ? true : false;
      });

      return Object.assign({}, state, { setForDeleteArr: filteredPeople });
    case RESET_SET_FOR_DELETE_ARRAY:
      return Object.assign({}, state, { setForDeleteArr: [] });
    case DELETE_RECORDS:
      filteredPeople = state.people.filter((person) => {
        return state.setForDeleteArr.indexOf(person._id) === -1 ? true : false;
      }); // end filter

      return Object.assign({}, state, { people: filteredPeople}, { setForDeleteArr: [] });
    case UPDATE_RECORD:
      filteredPeople = state.people.filter((person) => {
        return person._id === action.person._id ? false : true;
      }); // end filter

      return Object.assign({}, state, { people: [ ...filteredPeople, action.person] });
    default:
      return state;
  }

}
