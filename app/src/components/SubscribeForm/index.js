import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/Form';
import Layer from 'grommet/components/Layer';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Spinning from 'grommet/components/icons/Spinning';
import Notification from 'grommet/components/Notification';
import Anchor from 'grommet/components/Anchor';
import Section from 'grommet/components/Section';
import Footer from 'grommet/components/Footer';

const SubscribeForm = ({
  onSubmit,
  emailInput,
  isShowingModal,
  onCloseModal,
  error,
  isSubmitting,
  message,
  onCloseError,
}) => (
  <Form className={styles.subscribeForm} onSubmit={onSubmit}>
    <Layer align="center" closer hidden={!isShowingModal} onClose={onCloseModal}>
      <Section>
        <Box
          align="center"
          size="medium"
          style={{ minHeight: 100 }}
          pad={{ horizontal: 'large', vertical: 'medium' }}
        >
          <Heading align="center" tag="h2">
            Thanks!
          </Heading>
          <Heading align="center" tag="h5">
            {message}
          </Heading>
          <Footer align="center" pad={{ vertical: 'medium' }}>
            <Button onClick={(e) => e}>{/* eslint-disable react/jsx-no-bind */}
              <Anchor href="mailto:admin@ryancollins.io">
                Contact Us
              </Anchor>
            </Button>
          </Footer>
        </Box>
      </Section>
    </Layer>
    <Box
      direction="row"
      justify="between"
    >
      <FormField
        size="small"
        className={styles.formField}
        label="Email"
        htmlFor="emailInput"
        error={emailInput.touched && emailInput.error ? emailInput.error : null}
      >
        <input
          id="emailInput"
          type="email"
          name="email"
          required
          {...emailInput}
        />
      </FormField>
      <Button primary onClick={onSubmit} className={styles.button}>
        Submit
      </Button>
    </Box>
    <Box
      align="center"
      size="small"
      pad={{ horizontal: 'medium', vertical: 'medium' }}
    >
      {isSubmitting &&
        <Spinning />
      }
      {error !== null &&
        <Notification
          full={false}
          message={error.message}
          status="critical"
          closer
          onClose={onCloseError}
        />
      }
    </Box>
  </Form>
);

SubscribeForm.propTypes = {
  emailInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  isShowingModal: PropTypes.bool.isRequired,
  onCloseModal: PropTypes.func.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.object,
  message: PropTypes.string,
  onCloseError: PropTypes.func.isRequired,
};

SubscribeForm.defaultProps = {
  isShowingModal: false,
  message: `Thanks so much for subscribing!
    We will get the first issue out to you within the next week.`,
};

export default cssModules(SubscribeForm, styles);
