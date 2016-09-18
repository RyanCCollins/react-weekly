import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as LandingActionCreators from './actions';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { HomeHero, SubscribeForm, Thanks } from 'components';
import { reduxForm } from 'redux-form';
import validation from './validation';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';

export const subscribeFields = [
  'emailInput',
];

export class LandingContainer extends Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCloseError = this.handleCloseError.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);
    this.handleLoad = this.handleLoad.bind(this);
  }
  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.handleLoad);
    setTimeout(() => { // Load anyways after 20 seconds
      this.handleLoad();
    }, 20000);
  }
  componentWillUnmount() {
    window.removeEventListener('DOMContentLoaded', this.handleLoad);
  }
  handleLoad() {
    const {
      setIsLoaded,
    } = this.props.actions;
    window.requestAnimationFrame(() => {
      setIsLoaded();
    });
  }
  handleSubmit() {
    const {
      submitEmail,
      fields,
      actions,
      messages,
    } = this.props;
    actions.emailSubmissionInitiation();
    if (fields.emailInput.valid) {
      submitEmail({ email: fields.emailInput.value })
        .then(res => {
          if (res.errors) {
            actions.emailSubmissionFailure(res.errors[0]);
          } else {
            actions.emailSubmissionSuccess(messages.thanks);
          }
        }).catch(err => {
          let error = err;
          if (err.message.indexOf('GraphQL error: E11000') !== -1) {
            error = new Error(
              'It would seem that we already have a user with that email address'
            );
          }
          actions.emailSubmissionFailure(error);
        });
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
      didSubmit,
    } = this.props;
    return (
      <HomeHero isLoaded={isLoaded}>
        {didSubmit ?
          <Thanks />
        :
          <SubscribeForm
            {...fields}
            onCloseError={this.handleCloseError}
            isSubmitting={isSubmitting}
            message={error ? error.message : message}
            error={error}
            onSubmit={this.handleSubmit}
            isShowingModal={isShowingModal}
            onCloseModal={this.handleModalClose}
          />
        }
      </HomeHero>
    );
  }
}

LandingContainer.propTypes = {
  fields: PropTypes.object.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  actions: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.object,
  message: PropTypes.string,
  isLoaded: PropTypes.bool.isRequired,
  submitEmail: PropTypes.func.isRequired,
  messages: PropTypes.object.isRequired,
  didSubmit: PropTypes.bool.isRequired,
};

// mapStateToProps :: {State} -> {Props}
const mapStateToProps = (state) => ({
  isShowingModal: state.landing.isShowingModal,
  isSubmitting: state.landing.isSubmitting,
  error: state.landing.error,
  message: state.landing.message,
  isLoaded: state.landing.isLoaded,
  didSubmit: state.landing.didSubmit,
  messages: state.landing.messages,
});

// mapDispatchToProps :: Dispatch -> {Action}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    LandingActionCreators,
    dispatch
  ),
});

const submitEmail = gql`
  mutation submitEmail($email: String!) {
    create (data: { email:$email })
  }
`;

const Container = cssModules(LandingContainer, styles);

const ContainerWithData = graphql(submitEmail, {
  props: ({ mutate }) => ({
    submitEmail({ email }) {
      return mutate({
        variables: { email },
      });
    },
  }),
})(Container);

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ContainerWithData);

export default reduxForm({
  form: 'subscribeForm',
  fields: subscribeFields,
  validate: validation,
})(ConnectedContainer);
