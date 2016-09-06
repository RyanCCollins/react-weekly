import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { HomeHero, SubscribeForm } from 'components';
import { reduxForm } from 'redux-form';
import validation from './validation';

export const subscribeFields = [
  'emailInput',
];

class Landing extends Component { // eslint-disable-line react/prefer-stateless-function
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit() {

  }
  render() {
    const {
      fields,
    } = this.props;
    return (
      <HomeHero>
        <SubscribeForm {...fields} onSubmit={this.handleSubmit} />
      </HomeHero>
    );
  }
}

Landing.propTypes = {
  fields: PropTypes.object.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  //
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const Container = cssModules(Landing, styles);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default reduxForm({
  form: 'subscribeForm',
  fields: subscribeFields,
  validate: validation,
})(ConnectedContainer);
