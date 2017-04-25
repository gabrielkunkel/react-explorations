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
  HANDLE_INPUT_CHANGE
} from '../constants/actionTypes';

import initialState from './initialState';

export default function formReducer(state = initialState.form, action) {
  let filteredPeople;

  switch (action.type) {
    case ADD_PERSON:
      return Object.assign({}, state, { people: [ ...state.people, action.newPerson] });
    case TOGGLE_ADD_PERSON_PANEL:
      return Object.assign({}, state, {addPersonPanel: !state.addPersonPanel});
    case TOGGLE_UPDATE_PANEL: // TODO: Switch out for KILL_UPDATE_PANEL
      return Object.assign({}, state, { updatePersonPanel: false }, { personToUpdate: {
        _id: "",
        name: "",
        city: "",
        age: ""
      }});
      // if you click on a person AND it's closed THEN it opens  Toggles if you click on a person.
      // if you click on a person AND it's open THEN it closes


      // return state.personToUpdate._id === "" ? Object.assign({}, state, { updatePersonPanel: !state.updatePersonPanel }) :
      //         state.personToUpdate._id === action.personId ? Object.assign({}, state, { updatePersonPanel: !state.updatePersonPanel }, { personToUpdate: {
      //               _id: "",
      //               name: "",
      //               city: "",
      //               age: ""
      //             }}) : state;
    case SET_FOR_DELETE:
      return Object.assign({}, state, { setForDeleteArr: [ ...state.setForDeleteArr, action.personId]});
    case SET_FOR_UPDATE:  // { updatePersonPanel: true } // TODO: If it's the same one in personToUpdate then updatePersonPanel: true, otherwise false.
      return Object.assign({}, state, { personToUpdate: action.person }, { updatePersonPanel: true });
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

      return Object.assign({}, state, { people: [ ...filteredPeople, action.person] }, { personToUpdate: {
        _id: "",
        name: "",
        city: "",
        age: ""
      }}, { updatePersonPanel: false });
    case HANDLE_INPUT_CHANGE:
      return Object.assign({}, state, { personToUpdate: action.person });
    default:
      return state;
  }

}
