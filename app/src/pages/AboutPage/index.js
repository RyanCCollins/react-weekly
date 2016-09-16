import React, { Component } from 'react';
import cssModules from 'react-css-modules';
import styles from './index.module.scss';
import { AboutInfo, AppFooter } from 'components';
import editors from './data';
import { updatePageTitle } from 'utils/a11yTitle';

class AboutPage extends Component {
  constructor() {
    super();
    this.handleLoad = this.handleLoad.bind(this);
    this.state = {
      isLoaded: false,
    };
  }
  componentDidMount() {
    window.addEventListener('DOMContentLoaded', this.handleLoad);
    updatePageTitle('About');
  }
  componentWillUnmount() {
    window.removeEventListener('DOMContentLoaded', this.handleLoad);
  }
  handleLoad() {
    this.setState({
      isLoaded: true,
    });
  }
  render() {
    const {
      isLoaded,
    } = this.state;
    return (
      <div className={styles.container}>
        <AboutInfo editors={editors} isLoaded={isLoaded} />
        <AppFooter />
      </div>
    );
  }
}


export default cssModules(AboutPage, styles);
