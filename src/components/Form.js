import React from 'react';
import PropTypes from 'prop-types';

const Form = ({addPerson}) => {

  let _name, _city, _age, _id;

  const submit = (e) => {
    e.preventDefault();
    addPerson({
      name: _name.value,
      city: _city.value,
      age: _age.value,
      _id: _id.value
    });

    // clear form field
    _name.value = "";
    _city.value = "";
    _age.value = "";
    _id.value = "";

  };

  return (
    <div>
      <form onSubmit={submit}>
        <h3>Add Person</h3>
        <label htmlFor="_id">Some Unique ID: </label>
        <input type="text" name="_id" ref={input => _id = input} id="_id" required />
        <br />
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" ref={input => _name = input} id="name" required />
        <br />
        <label htmlFor="city">City: </label>
        <input type="text" name="city" ref={input => _city = input} id="city" required />
        <br />
        <label htmlFor="age">Age: </label>
        <input type="text" name="age" ref={input => _age = input} id="age" required />
        <br />
        <input type="submit" value="Submit" />
      </form>

    </div>
  );
};

Form.propTypes = {
  addPerson: PropTypes.func.isRequired
};

export default Form;
