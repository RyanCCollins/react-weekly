import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutInfo, AppFooter } from 'components';
import editors from './data';
import { updatePageTitle } from 'utils/a11yTitle';

class AboutPage extends Component {
  componentDidMount() {
    updatePageTitle('About');
  }
  render() {
    return (
      <div className={styles.container}>
        <AboutInfo editors={editors} />
        <AppFooter />
      </div>
    );
  }
}


export default cssModules(AboutPage, styles);
