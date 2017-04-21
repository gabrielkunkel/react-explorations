import {
	ADD_PERSON,
	TOGGLE_ADD_PERSON_PANEL,
	DELETE_RECORDS,
	SET_FOR_DELETE,
	UNSET_FOR_DELETE,
	RESET_SET_FOR_DELETE_ARRAY,
	UPDATE_RECORD,
	TOGGLE_UPDATE_PANEL,
	SET_FOR_UPDATE
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

export function openUpdatePersonPanel() {
	return {
		type: TOGGLE_UPDATE_PANEL
	}
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

export function setForUpdate( person ) {
	return {
		type: SET_FOR_UPDATE,
		person
	}
}

export function updatePerson( person ) {
	return {
		type: UPDATE_RECORD,
		person
	}
}
