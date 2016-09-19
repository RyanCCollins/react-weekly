import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { Static, AppFooter } from 'components';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import privacyPolicy from './privacy_policy.md';

const PrivacyPage = () => (
  <main className={styles.container}>
    <Section
      colorIndex="light-2"
      align="center"
      justify="center"
      pad={{ vertical: 'large' }}
    >
      <Heading align="center" tag="h1">
        Privacy Policy
      </Heading>
      <Static content={privacyPolicy} hasBoxShadow />
    </Section>
    <AppFooter />
  </main>
);

export default cssModules(PrivacyPage, styles);
