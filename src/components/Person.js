import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Person extends Component {

  constructor(props) {
    super(props);

    this.state = {
      checked: false
    };

    console.log(this.props);

    this.checkboxToggle = this.checkboxToggle.bind(this);
    this.nameClick = this.nameClick.bind(this);
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

  nameClick() {
    this.props.openUpdatePersonPanel();
    this.props.setForUpdate(this.props.person);
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
  openUpdatePersonPanel: PropTypes.func.isRequired,
  setForUpdate: PropTypes.func.isRequired
};

export default Person;
