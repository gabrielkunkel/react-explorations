import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.checkboxToggle = this.checkboxToggle.bind(this);
  }

  checkboxToggle() {

    this.setState({ checked: !this.state.checked }, () => {
      if (this.state.checked === false) {
        this.props.removeFromSetForDelete(this.props.person._id);
      }
      // TODO: Why, when I removed the "else if" did this work?
      if (this.state.checked === true) {
        this.props.setForDelete(this.props.person._id);
      }
    });
  }

  // TODO: Add a dive on the person names, so at a click it loads the data into update panel (only if it's open)
    render() {
        return (
          <div>
            <input type="checkbox" name="person" checked={this.state.checked} onChange={this.checkboxToggle} />
            <div onClick={this.props.openUpdatePersonPanel}> {this.props.person.name} ({this.props.person.age}) </div>
          </div>
        );
    }
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
  setForDelete: PropTypes.func.isRequired,
  updatePersonPanel: PropTypes.bool.isRequired
};

export default Person;
