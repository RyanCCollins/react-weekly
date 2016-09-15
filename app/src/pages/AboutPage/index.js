import React from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutInfo, AppFooter } from 'components';
import editors from './data';

const AboutPage = () => (
  <div className={styles.container}>
    <AboutInfo editors={editors} />
    <AppFooter />
  </div>
);

export default cssModules(AboutPage, styles);
