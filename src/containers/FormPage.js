import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/formActions';
import {connect} from 'react-redux';

import PeopleList from '../components/PeopleList';
import Form from '../components/Form';
import UpdateForm from '../components/UpdateForm';

const FormPage = ({people, addPersonPanel, updatePersonPanel, personToUpdate, actions}) => {

  return (
    <div>
      <div>
        <div onClick={actions.openAddPersonPanel}>Add Person</div>
      </div>
      <div>
        { addPersonPanel ? <Form addPerson={actions.addPerson} /> :
          updatePersonPanel ? <UpdateForm personToUpdate={personToUpdate}
                                updatePerson={actions.updatePerson}
                                toggleUpdatePersonPanel={actions.toggleUpdatePersonPanel}
                                handleInputChange={actions.handleInputChange}
                                /> :
          null }
      </div>
      <PeopleList people={people}
        resetSetForDeleteArr={actions.resetSetForDeleteArr}
        setForDelete={actions.setForDelete}
        deleteRecords={actions.deleteRecords}
        removeFromSetForDelete={actions.removeFromSetForDelete}
        updatePersonPanel={updatePersonPanel}
        toggleUpdatePersonPanel={actions.toggleUpdatePersonPanel}
        setForUpdate={actions.setForUpdate}
        personToUpdate={personToUpdate}
        toggleUpdatePersonPanel={actions.toggleUpdatePersonPanel}
        />
    </div>
  );
};

FormPage.propTypes = {
  actions: PropTypes.object.isRequired,
  people: PropTypes.array.isRequired,
  addPersonPanel: PropTypes.bool.isRequired,
  updatePersonPanel: PropTypes.bool.isRequired,
  personToUpdate: PropTypes.object
};

function mapStateToProps(state) {
  return {
    people: state.form.people,
    addPersonPanel: state.form.addPersonPanel,
    updatePersonPanel: state.form.updatePersonPanel,
    personToUpdate: state.form.personToUpdate
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
