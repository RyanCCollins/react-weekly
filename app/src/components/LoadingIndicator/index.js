import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const LoadingIndicator = ({
  isLoading,
}) => (
  <div className={styles.loadingIndicator}>
    {isLoading &&
      <h1>Loading...</h1>
    }
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(LoadingIndicator, styles);
