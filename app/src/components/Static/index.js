import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Markdown from 'grommet/components/Markdown';
import Section from 'grommet/components/Section';
import Article from 'grommet/components/Article';

const Static = ({
  content,
  hasBoxShadow,
}) => (
  <Section
    align="center"
    className={hasBoxShadow ? styles.boxShadow : styles.static}
    colorIndex={hasBoxShadow ? 'light-1' : ''}
    pad={{ horizontal: 'medium', vertical: 'medium' }}
  >
    <Article>
      <Markdown content={content} />
    </Article>
  </Section>
);

Static.propTypes = {
  content: PropTypes.string.isRequired,
  hasBoxShadow: PropTypes.bool,
};

Static.defaultProps = {
  hasBoxShadow: false,
};

export default cssModules(Static, styles);
