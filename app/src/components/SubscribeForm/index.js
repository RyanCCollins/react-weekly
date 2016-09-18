import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';
import Spinning from 'grommet/components/icons/Spinning';
import Notification from 'grommet/components/Notification';

const SubscribeForm = ({
  onSubmit,
  emailInput,
  error,
  isSubmitting,
  onCloseError,
}) => (
  <Form className={styles.subscribeForm} onSubmit={onSubmit}>
    <Box
      direction="row"
      justify="between"
      className={styles.formFieldBox}
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
      <Button
        primary
        onClick={onSubmit}
        className={styles.button}
        id="submit-button"
      >
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
  isSubmitting: PropTypes.bool.isRequired,
  error: PropTypes.object,
  onCloseError: PropTypes.func.isRequired,
};

export default cssModules(SubscribeForm, styles);
