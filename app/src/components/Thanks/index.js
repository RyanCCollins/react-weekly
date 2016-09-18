import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Button from 'grommet/components/Button';
import Anchor from 'grommet/components/Anchor';

const Thanks = () => (
  <Box className={styles.thanks} align="center">
    <Heading tag="h3" align="center">
      Thanks For Subcribing!
    </Heading>
    <Button
      onClick={(e) => e}
      href="mailto:admin@ryancollins.io"
      fill
      primary
    >
      Get in touch
    </Button>
  </Box>
);

Thanks.propTypes = {

};

export default cssModules(Thanks, styles);
