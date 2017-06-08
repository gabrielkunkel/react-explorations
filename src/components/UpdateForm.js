import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpdateForm extends Component {

  constructor(props){
    super(props);

    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.personToUpdate._id !== this.props.personToUpdate._id) {
      document.getElementById("name").value = nextProps.personToUpdate.name;
      document.getElementById("age").value = nextProps.personToUpdate.age;
      document.getElementById("city").value = nextProps.personToUpdate.city;
    }

  }

  submit(e) {
    e.preventDefault();

    this.props.updatePerson({
      name: document.getElementById("name").value,
      city: document.getElementById("city").value,
      age: document.getElementById("age").value,
      _id: this.props.personToUpdate._id
    });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <h3>Update Person</h3>
          Unique ID: {this.props.personToUpdate._id}
          <br />
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" id="name" ref="name" defaultValue={this.props.personToUpdate.name} required />
          <br />
          <label htmlFor="city">City: </label>
          <input type="text" name="city" id="city" ref="city" defaultValue={this.props.personToUpdate.city} required />
          <br />
          <label htmlFor="age">Age: </label>
          <input type="text" name="age" id="age" ref="age" defaultValue={this.props.personToUpdate.age} required />
          <br />
          <input type="submit" value="Update" />
        </form>

      </div>
    );
  }
} // end class

UpdateForm.propTypes = {
  updatePerson: PropTypes.func.isRequired,
  personToUpdate: PropTypes.object,
  handleInputChange: PropTypes.func
};

export default UpdateForm;
