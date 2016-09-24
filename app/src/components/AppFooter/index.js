import React from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Footer from 'grommet/components/Footer';
import { LogoImage } from 'components';
import Box from 'grommet/components/Box';
import Heading from 'grommet/components/Heading';
import SocialShare from 'grommet/components/SocialShare';
import Anchor from 'grommet/components/Anchor';
import ComplianceIcon from 'grommet/components/icons/base/Compliance';
import ShieldIcon from 'grommet/components/icons/base/Shield';

const AppFooter = () => (
  <Footer className={styles.appFooter}>
    <Box
      direction="column"
      align="center"
      pad={{ vertical: 'large' }}
      responsive
      className={styles.flexOne}
    >
      <Anchor href="https://medium.com/react-weekly">
        <LogoImage
          size="small"
          isSpinning
          style={{ marginBottom: 20, height: 'auto', maxWidth: 48 }}
        />
      </Anchor>
      <Heading tag="h3">
        <Anchor href="https://medium.com/react-weekly">
          React Weekly
        </Anchor>
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
          link="http://www.reactweekly.co"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
        <SocialShare
          a11yTitle="Go to Twitter to Share this website"
          type="twitter"
          link="http://www.reactweekly.co"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
        <SocialShare
          a11yTitle="Go to Linkedin to Share this website"
          type="linkedin"
          link="http://www.reactweekly.co"
          title="React Weekly"
          text="React Weekly - Curated React Content Delivered Weekly"
        />
      </nav>
      <div className={styles.termsAnchor}>
        <Anchor
          href="/terms"
          label="Terms of Service"
          icon={<ComplianceIcon />}
          colorIndex="brand"
        />
        <span className={styles.seperator}>{'  |  '}</span>
        <span className={styles.privacyAnchor}>
          <Anchor
            href="/privacy"
            label="Privacy Policy"
            icon={<ShieldIcon />}
            colorIndex="brand"
          />
        </span>
      </div>
    </Box>
  </Footer>
);

export default cssModules(AppFooter, styles);
