import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import Animate from 'grommet/components/Animate';
import { LogoImage } from 'components';

const HomeHero = ({
  children,
  isLoaded,
}) => (
  <Section className={styles.homeHero}>
    <Box
      appCentered
      justify="start"
      className={styles.noPad}
      align="center"
      pad={{ vertical: 'large' }}
    >
      <Animate
        enter={{ animation: 'slide-up', duration: 2500 }}
        visible={isLoaded}
        keep
      >
        <div className={styles.coolLogo}>
          <LogoImage
            isSpinning
            size="small"
            style={{ marginBottom: 10 }}
          />
        </div>
      </Animate>
      <Animate
        enter={{ animation: 'slide-up', duration: 2500 }}
        visible={isLoaded}
        keep
      >
        <Heading tag="h1" strong align="center">
          React Weekly
        </Heading>
      </Animate>
        <Animate
          enter={{ animation: 'slide-down', duration: 2500 }}
          visible={isLoaded}
          keep
        >
        <Heading tag="h4" align="center">
          Curated React JS content sent to your inbox weekly
        </Heading>
        </Animate>
      <Animate
        enter={{ animation: 'slide-down', duration: 2500 }}
        visible={isLoaded}
        keep
      >
        {children}
      </Animate>
    </Box>
  </Section>
);

HomeHero.propTypes = {
  children: PropTypes.node.isRequired,
  isLoaded: PropTypes.bool.isRequired,
};

export default cssModules(HomeHero, styles);
