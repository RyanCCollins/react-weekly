import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LandingContainer, ContentStreamContainer } from 'containers';
import { AppFooter } from 'components';

const LandingPage = () => (
  <div className={styles.container}>
    <LandingContainer />
    <ContentStreamContainer />
    <AppFooter />
  </div>
);

export default cssModules(LandingPage, styles);
