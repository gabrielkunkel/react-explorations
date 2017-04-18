import {
	ADD_PERSON,
	TOGGLE_ADD_PERSON_PANEL,
	DELETE_RECORDS,
	SET_FOR_DELETE,
	UNSET_FOR_DELETE,
	RESET_SET_FOR_DELETE_ARRAY
} from '../constants/actionTypes';

export function addPerson( newPerson ) {
	return {
		type: ADD_PERSON,
		newPerson
	};
}

export function openAddPersonPanel() {
	return {
		type: TOGGLE_ADD_PERSON_PANEL
	};
}

export function setForDelete( personId ) {
	return {
		type: SET_FOR_DELETE,
		personId
	};
}

export function removeFromSetForDelete(personId) {
	return {
		type: UNSET_FOR_DELETE,
		personId
	}
}

export function resetSetForDeleteArr() {
	return {
		type: RESET_SET_FOR_DELETE_ARRAY
	};
}

export function deleteRecords( recIdArr ) {
	return {
		type: DELETE_RECORDS,
		recIdArr
	};
}
