import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';


const Thanks = () => (
  <Box className={styles.thanks} align="center">
    <Heading tag="h3" align="center">
      Thanks For Subscribing!
    </Heading>
    <Button
      onClick={(e) => e}
      href="mailto:admin@ryancollins.io"
      label="Get in Touch"
      primary
    />
  </Box>
);

export default cssModules(Thanks, styles);
