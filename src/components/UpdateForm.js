import React from 'react';
import PropTypes from 'prop-types';

const UpdateForm = ({ updatePerson, personToUpdate, handleInputChange }) => {

  let _name, _city, _age, _id;

  const submit = (e) => {
    e.preventDefault();

    updatePerson({
      name: _name.value,
      city: _city.value,
      age: _age.value,
      _id: _id.value
    });

  };

  // QUES: What would happen if I didn't keep personToUpdate, but based on index?
  // TODO: Change the label for submit button to "Update" + Change label on add form, as well.
  // TODO: Prevent users from changing the ID (just display it)

  // To solve the main problem
  // TODO: remove ref={input => _id = input} and see if event.taget.name is no longer undefined
  // NOPE: turning onChanges into lambdas
  // TODO: create a separate function in UpdateForm to run first so the event can run

  return (
    <div>
      <form onSubmit={submit}>
        <h3>Update Person</h3>
        <label htmlFor="_id">Some Unique ID: </label>
        <input type="text" name="_id" ref={input => _id = input}  id="_id" value={personToUpdate._id} onChange={handleInputChange.bind(this, "_id")} required />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" ref={input => _name = input} id="name" value={personToUpdate.name} onChange={handleInputChange.bind(this, "name")} required />
        <br />
        <label htmlFor="city">City: </label>
        <input type="text" name="city" ref={input => _city = input} id="city" value={personToUpdate.city} onChange={handleInputChange.bind(this, "city")} required />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" ref={input => _age = input} id="age" value={personToUpdate.age} onChange={handleInputChange.bind(this, "age")} required />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

UpdateForm.propTypes = {
  updatePerson: PropTypes.func.isRequired,
  personToUpdate: PropTypes.object,
  handleInputChange: PropTypes.func
};

export default UpdateForm;
