import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Hero from 'grommet/components/hero';
import Heading from 'grommet/components/heading';
import Box from 'grommet/components/Box';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';
import Image from 'grommet/components/Image';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Markdown from 'grommet/components/Markdown';
import Anchor from 'grommet/components/Anchor';
import Card from 'grommet/components/Card';
import Animate from 'grommet/components/Animate';
import { Editor, LogoImage } from 'components';

const AboutInfo = ({
  editors,
  isLoaded,
}) => (
  <div className={styles.aboutInfo}>
    <Hero
      backgroundType="image"
      justify="center"
      className={styles.hero}
    >
      <Box
        align="center"
        alignContent="center"
        focusable="false"
        justify="center"
      >
        <Animate
          enter={{ animation: 'slide-down', duration: 2500 }}
          visible={isLoaded}
          keep
        >
          <LogoImage isSpinning size="small" style={{ maxWidth: 100, height: 100 }} />
        </Animate>
        <Animate
          enter={{ animation: 'slide-up', duration: 2500 }}
          visible={isLoaded}
          keep
        >
          <Heading tag="h1" align="center" style={styles.paddedHeader}>
            React Weekly
          </Heading>
        </Animate>
      </Box>
    </Hero>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Heading align="center" tag="h1">
        About
      </Heading>
      <Box
        align="center"
        alignContent="center"
        focusable="false"
        justify="center"
        pad={{ vertical: 'small' }}
        colorIndex="light-1"
      >
        <Card
          label="Behind the project"
          heading="React Weekly"
          description={
          <Markdown
            content={`React Weekly was started to offer curated React JS content to the public.
            We seriously love React and hope that this publication acts as a resource
            for you to learn more about the React Ecosystem. <br />
            Check us out on medium and feel free to sign up to receive content from the publication
            in your inbox every week.`}
          />
          }
        />
      </Box>
      <Footer>
        <Box
          pad="medium"
          align="center"
          justify="center"
          focusable={false}
          style={{ minHeight: 100 }}
          full="horizontal"
        >
          <Anchor href="https://medium.com/react-weekly">
            <Button
              onClick={(a) => a} // eslint-disable-line react/jsx-no-bind
              a11yTitle="Go To Medium"
            >
              Take me to Medium
            </Button>
          </Anchor>
        </Box>
      </Footer>
    </Section>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Heading align="center" tag="h1">
        {'Who\'s Behind All This?'}
      </Heading>
      <Box
        align="center"
        alignContent="center"
        focusable="false"
        justify="center"
        pad={{ vertical: 'large' }}
        colorIndex="light-1"
      >
        <img
          src="https://github.com/RyanCCollins/cdn/blob/master/misc/ryanc.jpg?raw=true"
          alt="Ryan Collins, Full Stack Developer"
          className={styles.avatar}
        />
        <Box
          align="center"
          alignContent="center"
          focusable="false"
          justify="center"
          pad={{ vertical: 'large', horizontal: 'large' }}
          colorIndex="light-1"
        >
          <Heading tag="h2" align="center">
            Ryan Collins
          </Heading>
          <Heading tag="h3" align="center">
            Web Techologist, Full Stack Engineer
          </Heading>
          <Heading tag="h5" align="center">
            Experienced engineer specializing in implementing
            cutting-edge technologies
            <br />
            in a multitude of domains,
            including Front End web, UI / UX, et. al.
          </Heading>
        </Box>
      </Box>
    </Section>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Heading align="center" tag="h1">
        Editors In Chief
      </Heading>
      <Box direction="row" className={styles.editorsGrid} wrap align="center" justify="center">
        {editors.map((person, index) =>
          <Box flex justify="start" basis="medium">
            <Editor key={index} person={person} />
          </Box>
        )}
      </Box>
    </Section>
    <Section pad={{ vertical: 'large', horizontal: 'large' }}>
      <Article>
        <Section pad={{ vertical: 'large', horizontal: 'large' }}>
          <Heading align="center" tag="h2">
            Made With These Great Technologies
          </Heading>
          <span style={{ marginBottom: 80 }} />
          <Tiles justify="center" full="horizontal">
            <Tile align="center">
              <Anchor href="https://facebook.github.io/react/">
                <Image
                  alt="React Logo"
                  size="small"
                  style={{ maxHeight: 192, maxWidth: 192 }}
                  src="http://coenraets.org/present/react/img/react.png"
                />
              </Anchor>
            </Tile>
            <Tile align="center">
              <Anchor href="http://redux.js.org/docs/introduction/">
                <Image
                  alt="Redux Logo"
                  size="small"
                  style={{ maxHeight: 192, maxWidth: 192 }}
                  src="https://raw.githubusercontent.com/reactjs/redux/master/logo/logo.png"
                />
              </Anchor>
            </Tile>
            <Tile align="center">
              <Anchor href="https://grommet.github.io/">
                <Image
                  alt="Grommet Logo"
                  size="small"
                  style={{ maxHeight: 192, maxWidth: 192 }}
                  src="https://camo.githubusercontent.com/17515422f0b959746bb2dcaf02533e7e00bac225/68747470733a2f2f67726f6d6d65742e6769746875622e696f2f696d672f67726f6d6d65742e737667"
                />
              </Anchor>
            </Tile>
            <Tile align="center">
              <Anchor href="https://github.com/RyanCCollins/scalable-react-boilerplate">
                <Image
                  alt="Scalable React Boilerplate"
                  size="small"
                  style={{ maxHeight: 192, maxWidth: 192 }}
                  src="https://github.com/RyanCCollins/cdn/blob/master/restaurant-reviewer/scalable-react-boilerplate.png?raw=true"
                />
              </Anchor>
            </Tile>
          </Tiles>
        </Section>
        <Footer>
          <Box
            pad="medium"
            align="center"
            justify="center"
            focusable={false}
            style={{ minHeight: 200 }}
            full="horizontal"
          >
            <Anchor href="/">
              <Button
                onClick={(a) => a} // eslint-disable-line react/jsx-no-bind
                a11yTitle="Go Home"
              >
                Take me home
              </Button>
            </Anchor>
          </Box>
        </Footer>
      </Article>
    </Section>
  </div>
);

AboutInfo.propTypes = {
  isLoaded: PropTypes.bool.isRequired,
};

AboutInfo.defaultProps = {
  isLoaded: false,
};

export default cssModules(AboutInfo, styles);
