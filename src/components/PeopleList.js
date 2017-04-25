import React, { Component } from 'react';
import Person from './Person';
import PropTypes from 'prop-types';

class PeopleList extends Component {

  constructor(props) {
    super(props);
  }

  componentWillUnmount() {
    this.props.resetSetForDeleteArr();
  }

  render() {
    return(
      <div>
        {this.props.people.map((person) => {
          return <Person
            key={person._id}
            person={person}
            setForDelete={this.props.setForDelete}
            removeFromSetForDelete={this.props.removeFromSetForDelete}
            updatePersonPanel={this.props.updatePersonPanel}
            setForUpdate={this.props.setForUpdate}
            toggleUpdatePersonPanel={this.props.toggleUpdatePersonPanel}
            personToUpdate={this.props.personToUpdate}
            />;
        })}
        <div onClick={() => this.props.deleteRecords()}>Delete Selected Records</div>
      </div>
    );
  }

} // end class


PeopleList.propTypes = {
  people: PropTypes.array.isRequired,
  deleteRecords: PropTypes.func.isRequired,
  setForDelete: PropTypes.func.isRequired,
  resetSetForDeleteArr: PropTypes.func.isRequired,
  updatePersonPanel: PropTypes.bool.isRequired,
  toggleUpdatePersonPanel: PropTypes.func.isRequired,
  personToUpdate: PropTypes.object.isRequired
};

export default PeopleList;
