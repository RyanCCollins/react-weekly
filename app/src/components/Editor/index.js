import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Heading from 'grommet/components/heading';
import Box from 'grommet/components/Box';

const Editor = ({
  person,
}) => (
  <Box
    align="center"
    alignContent="center"
    focusable="false"
    justify="center"
    pad={{ vertical: 'small' }}
    colorIndex="light-1"
  >
    <img
      src={person.avatar}
      alt={person.name}
      className={styles.avatar}
    />
    <Box
      align="center"
      alignContent="center"
      focusable="false"
      justify="center"
      pad={{ vertical: 'large', horizontal: 'small' }}
      colorIndex="light-1"
      style={{ maxWidth: 400 }}
    >
      <Heading tag="h2" align="center">
        {person.name}
      </Heading>
      <Heading tag="h4" align="center">
        {person.title}
      </Heading>
      <Heading tag="h5" align="center">
        {person.description}
      </Heading>
    </Box>
  </Box>
);

Editor.propTypes = {
  person: PropTypes.object.isRequired,
};

export default cssModules(Editor, styles);
