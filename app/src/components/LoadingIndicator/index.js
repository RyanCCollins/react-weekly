import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';
import Spinning from 'grommet/components/icons/Spinning';

const LoadingIndicator = ({
  isLoading,
}) => (
  <div className={styles.loadingIndicator}>
    {isLoading &&
      <div className={styles.loading}>
        <Heading align="center" tag="h3">Loading...</Heading>
        <Spinning />
      </div>
    }
  </div>
);

LoadingIndicator.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};

export default cssModules(LoadingIndicator, styles);
