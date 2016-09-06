import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Image from 'grommet/components/Image';
import ReactLogo from './react-logo.png';

const HomeHero = ({
  children,
}) => (
  <Section className={styles.homeHero}>
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
      <Heading tag="h1" strong align="center">
        React Weekly
      </Heading>
      <Heading tag="h4" align="center">
        Curated React JS content sent to your inbox weekly
      </Heading>
    </Box>
    {children}
  </Section>
);

HomeHero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(HomeHero, styles);
