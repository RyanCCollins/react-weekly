import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { LandingContainer, ContentStreamContainer } from 'containers';
import { AppFooter } from 'components';
import { updatePageTitle } from 'utils/a11yTitle';

class LandingPage extends Component {
  componentDidMount() {
    updatePageTitle('Home');
  }
  render() {
    return (
      <main>
        <LandingContainer />
        <ContentStreamContainer />
        <AppFooter />
      </main>
    );
  }
}

export default cssModules(LandingPage, styles);
