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


    render() {
        return (
          <div>
            <input type="checkbox" name="person" checked={this.state.checked} onChange={this.checkboxToggle} />
            {this.props.person.name} ({this.props.person.age})
          </div>
        );
    }
}

Person.propTypes = {
  person: PropTypes.object.isRequired,
  setForDelete: PropTypes.func.isRequired
};

export default Person;
