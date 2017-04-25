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
	HANDLE_INPUT_CHANGE,
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

export function toggleUpdatePersonPanel() {
	return {
		type: TOGGLE_UPDATE_PANEL,
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

export function handleInputChange(person) {
	return {
		type: HANDLE_INPUT_CHANGE,
		person
	}
}
