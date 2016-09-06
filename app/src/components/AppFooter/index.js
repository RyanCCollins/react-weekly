import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet/components/Footer';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box direction="column" align="center" pad="none" responsive className={styles.flexOne}>
      <Heading tag="h3">
        React Weekly
      </Heading>
      <Heading tag="h5">
        Curated React Content Delivered Weekly
      </Heading>
      <nav
        aria-hidden
        className={
          'grommetux-box grommetux-box--direction-row ' +
          'grommetux-box--responsive grommetux-box--pad-none ' +
          'grommetux-menu grommetux-menu--row grommetux-menu--inline'
        }
      >
        <SocialShare
          a11yTitle="Go to Facebook to Share this website"
          type="facebook"
          link="http://react-weekly.com"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
        <SocialShare
          a11yTitle="Go to Twitter to Share this website"
          type="twitter"
          link="http://react-weekly.com"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
        <SocialShare
          a11yTitle="Go to Linkedin to Share this website"
          type="linkedin"
          link="http://react-weekly.com"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
      </nav>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
