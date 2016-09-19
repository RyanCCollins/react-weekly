import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Markdown from 'grommet/components/Markdown';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';

const Static = ({
  content,
}) => (
  <Section
    align="center"
    className={styles.static}
    pad={{ horizontal: 'medium', vertical: 'medium' }}
  >
    <Article>
      <Markdown content={content} />
    </Article>
  </Section>
);

Static.propTypes = {
  content: PropTypes.string.isRequired,
};

export default cssModules(Static, styles);
