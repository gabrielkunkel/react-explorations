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

    // // clear form field
    // _name.value = "";
    // _city.value = "";
    // _age.value = "";
    // _id.value = "";

  };

  // TODO: Change the label for submit button to "Update" + Change label on add form, as well.
  // TODO: Prevent users from changing the ID (just display it)

  // const handleInputChange = (e) => {
  //
  // }

  return (
    <div>
      <form onSubmit={submit}>
        <h3>Update Person</h3>
        <label htmlFor="_id">Some Unique ID: </label>
        <input type="text" name="_id" ref={input => _id = input}  id="_id" defaultValue={personToUpdate._id} onChange={input => handleInputChange(personToUpdate)} required />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" ref={input => _name = input} id="name" defaultValue={personToUpdate.name} onChange={input => handleInputChange(personToUpdate)} required />
        <br />
        <label htmlFor="city">City: </label>
        <input type="text" name="city" ref={input => _city = input} id="city" defaultValue={personToUpdate.city} onChange={input => handleInputChange(personToUpdate)} required />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" ref={input => _age = input} id="age" defaultValue={personToUpdate.age} onChange={input => handleInputChange(personToUpdate)} required />
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
