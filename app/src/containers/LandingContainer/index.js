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
    this.handleCloseError = this.handleCloseError.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.handleLoad);
  }
  componentWillUnmount() {
    window.removeEventListener('DOMContentLoaded', this.handleLoad);
  }
  handleLoad() {
    const {
      setIsLoaded,
    } = this.props.actions;
    setIsLoaded();
  }
  handleSubmit() {
    const {
      actions,
      fields,
    } = this.props;
    if (fields.emailInput.valid) {
      actions.submitEmail({ email: fields.emailInput.value });
    }
  }
  handleModalClose() {
    const {
      closeModal,
    } = this.props.actions;
    closeModal();
  }
  handleCloseError() {
    const {
      closeError,
    } = this.props.actions;
    closeError();
  }
  render() {
    const {
      fields,
      isShowingModal,
      isSubmitting,
      error,
      message,
      isLoaded,
    } = this.props;
    return (
      <HomeHero isLoaded={isLoaded}>
        <SubscribeForm
          {...fields}
          onCloseError={this.handleCloseError}
          isSubmitting={isSubmitting}
          message={message}
          error={error}
          onSubmit={this.handleSubmit}
          isShowingModal={isShowingModal}
          onCloseModal={this.handleModalClose}
        />
      </HomeHero>
    );
  }
}

Landing.propTypes = {
  fields: PropTypes.object.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.object,
  message: PropTypes.string,
  isLoaded: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isShowingModal: state.landing.isShowingModal,
  isSubmitting: state.landing.isSubmitting,
  error: state.landing.error,
  message: state.landing.message,
  isLoaded: state.landing.isLoaded,
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
