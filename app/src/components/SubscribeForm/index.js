import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import FormField from 'grommet/components/FormField';
import Button from 'grommet/components/Button';
import Box from 'grommet/components/Box';

const SubscribeForm = ({
  onSubmit,
  emailInput,
}) => (
  <Form className={styles.subscribeForm} onSubmit={onSubmit}>
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
      <Button primary onClick={(e) => e} className={styles.button}>
        Submit
      </Button>
    </Box>
  </Form>
);

SubscribeForm.propTypes = {
  emailInput: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default cssModules(SubscribeForm, styles);
