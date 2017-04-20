import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/formActions';
import {connect} from 'react-redux';

import PeopleList from '../components/PeopleList';
import Form from '../components/Form';
import UpdateForm from '../components/UpdateForm';

const FormPage = ({people, addPersonPanel, updatePersonPanel, actions}) => {

  return (
    <div>
      <div onClick={actions.openAddPersonPanel}>Add Person</div> | <div onClick={actions.openUpdatePersonPanel}>Update Person</div>
      { addPersonPanel ? <Form addPerson={actions.addPerson} /> :
        updatePersonPanel ? <UpdateForm /> :
        null }
      <PeopleList people={people}
        resetSetForDeleteArr={actions.resetSetForDeleteArr}
        setForDelete={actions.setForDelete}
        deleteRecords={actions.deleteRecords}
        removeFromSetForDelete={actions.removeFromSetForDelete}
        updatePersonPanel={updatePersonPanel}
        openUpdatePersonPanel={actions.openUpdatePersonPanel}
        />
    </div>
  );
};

FormPage.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  addPersonPanel: PropTypes.bool.isRequired,
  updatePersonPanel: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    people: state.form.people,
    addPersonPanel: state.form.addPersonPanel,
    updatePersonPanel: state.form.updatePersonPanel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
