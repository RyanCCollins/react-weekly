import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import ReactLogo from './react-logo.png';

const HomeHero = (props) => (
  <Section {...props} className={styles.homeHero}>
    <Box
      appCentered
      full
      justify="start"
      align="center"
      pad={{ vertical: 'large' }}
    >
      <Image
        src={ReactLogo}
        size="small"
        className={styles.mainLogo}
      />
    </Box>
  </Section>
);


export default cssModules(HomeHero, styles);
