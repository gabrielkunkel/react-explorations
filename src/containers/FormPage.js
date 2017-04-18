import React from 'react';
import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import * as actionCreators from '../actions/formActions';
import {connect} from 'react-redux';

import PeopleList from '../components/PeopleList';
import Form from '../components/Form';

const FormPage = ({people, addPersonPanel, actions}) => {

  return (
    <div>
      <div onClick={actions.openAddPersonPanel}>Add Person</div>
      { addPersonPanel ? <Form addPerson={actions.addPerson} /> : null }
      <PeopleList people={people} resetSetForDeleteArr={actions.resetSetForDeleteArr} setForDelete={actions.setForDelete} deleteRecords={actions.deleteRecords} removeFromSetForDelete={actions.removeFromSetForDelete}/>
    </div>
  );
};

FormPage.propTypes = {
  people: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  addPersonPanel: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    people: state.form.people,
    addPersonPanel: state.form.addPersonPanel
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
