import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import { LogoImage } from 'components';

const HomeHero = ({
  children,
}) => (
  <Section className={styles.homeHero}>
    <Box
      appCentered
      justify="start"
      className={styles.noPad}
      align="center"
      pad={{ vertical: 'large' }}
    >
      <LogoImage size="small" style={{ marginBottom: 10 }} />
      <Heading tag="h1" strong align="center">
        React Weekly
      </Heading>
      <Heading tag="h4" align="center">
        Curated React JS content sent to your inbox weekly
      </Heading>
      {children}
    </Box>
  </Section>
);

HomeHero.propTypes = {
  children: PropTypes.node.isRequired,
};

export default cssModules(HomeHero, styles);
