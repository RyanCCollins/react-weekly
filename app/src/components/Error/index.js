import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Notification from 'grommet/components/Notification';

const Error = ({
  error,
}) => (
  <div className={styles.error} id="error__notification">
    <Notification
      status={error.status}
      message={error.message}
      full={false}
      basis="2/3"
    />
  </div>
);

Error.propTypes = {
  error: PropTypes.shape({
    status: PropTypes.oneOf(['warning', 'critical', 'ok', 'unknown']),
    message: PropTypes.string.isRequired,
  }),
};

Error.defaultProps = {
  error: {
    status: 'warning',
    message: 'An unknown error has occured.',
  },
};

export default cssModules(Error, styles);
