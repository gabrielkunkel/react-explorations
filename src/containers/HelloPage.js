import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/helloActions';

export const HelloPage = ({hello, actions}) => {
  return (
    <div>
      My name is {hello.name}. This is the hello page.
      <div onClick={() => actions.sayHello()}>But my name could be different.</div>
    </div>
  );
};

HelloPage.propTypes = {
  actions: PropTypes.object.isRequired,
  hello: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    hello: state.hello
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HelloPage);
