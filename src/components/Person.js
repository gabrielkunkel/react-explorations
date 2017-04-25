import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    this.checkboxToggle = this.checkboxToggle.bind(this);
    this.nameClick = this.nameClick.bind(this);
  }

  // TODO: Turn this into a pure stateless component (add this task to list, do commit)

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

  nameClick() {
    if (this.props.person._id !== this.props.personToUpdate._id) {
      // this.props.toggleUpdatePersonPanel();
      this.props.setForUpdate(this.props.person);
      this.forceUpdate();
    }
    else {
      this.props.toggleUpdatePersonPanel();
    }

  }

  // TODO: Add a dive on the person names, so at a click it loads the data into update panel (only if it's open)
    render() {
        return (
          <div>
            <input type="checkbox" name="person" checked={this.state.checked} onChange={this.checkboxToggle} />
            <span onClick={this.nameClick}>
                {this.props.person.name} ({this.props.person.age})
            </span>
          </div>
        );
    }
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
  setForDelete: PropTypes.func.isRequired,
  updatePersonPanel: PropTypes.bool.isRequired,
  removeFromSetForDelete: PropTypes.func.isRequired,
  toggleUpdatePersonPanel: PropTypes.func.isRequired,
  setForUpdate: PropTypes.func.isRequired,
  personToUpdate: PropTypes.object.isRequired
};

export default Person;
