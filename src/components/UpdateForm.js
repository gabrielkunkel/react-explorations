import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UpdateForm extends Component {

  constructor(props){
    super(props);

    console.log(props);

    this.submit = this.submit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.personToUpdate._id !== this.props.personToUpdate._id) {
      document.getElementById("name").value = nextProps.personToUpdate.name;
      document.getElementById("_id").value = nextProps.personToUpdate._id;
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
      _id: document.getElementById("_id").value
    });
  }

  // DONE: convert to class component
  // DONE: add shouldComponentUpdate and prevent updating, unless setForUpdate has been called

  // QUES: What would happen if I didn't keep personToUpdate, but based on index?
  // TODO: Change the label for submit button to "Update" + Change label on add form, as well.
  // TODO: Prevent users from changing the ID (just display it)

  render() {
    return (
      <div>
        <form onSubmit={this.submit}>
          <h3>Update Person</h3>
          <label htmlFor="_id">Some Unique ID: </label>
          <input type="text" name="_id" id="_id" ref="_id" defaultValue={this.props.personToUpdate._id} required />
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
          <input type="submit" value="Submit" />
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
