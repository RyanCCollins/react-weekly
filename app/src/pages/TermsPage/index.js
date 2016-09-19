import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { Static, AppFooter } from 'components';
import Heading from 'grommet/components/Heading';
import Section from 'grommet/components/Section';
import terms from './terms_of_service.md';

// Pages map directly to Routes, i.e. one page equals on Route

const TermsPage = () => (
  <main className={styles.container}>
    <Section align="center" justify="center" pad={{ vertical: 'large' }}>
      <Heading align="center" tag="h1">
        Terms of Service
      </Heading>
      <Static content={terms} />
    </Section>
    <AppFooter />
  </main>
);

export default cssModules(TermsPage, styles);
