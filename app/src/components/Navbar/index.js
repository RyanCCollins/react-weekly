import React from 'react';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Menu from 'grommet/components/Menu';
import Anchor from 'grommet/components/Anchor';
import Search from 'grommet/components/Search';
import LogoImage from './rwlogo.png';

import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const Navbar = () => (
  <div className={styles.navbar}>
    <Header justify="between">
      <Title className={styles.title}>
        <Anchor href="/">
          <img className={styles.logo} src={LogoImage} alt="logo"/>
        </Anchor>
      </Title>
      <Menu direction="row" align="center" responsive={false}>
        <Anchor href="#" className="active">
          Home
        </Anchor>
        <Anchor href="/about">
          About
        </Anchor>
        <Anchor href="https://medium.com/react-weekly">
          Medium
        </Anchor>
        <Anchor href="mailto:help@reactweekly.co">
          Contact Us
        </Anchor>
        <Search dropAlign={{ right: 'right' }} />
      </Menu>
    </Header>
  </div>
);

export default cssModules(Navbar, styles);
