import React, { PropTypes } from 'react';

const PlaceholderImage = ({
  size,
  styles,
}) => (
  <img
    src={`http://placehold.it/${size.width}x${size.height}`}
    styles={styles}
  />
);

PlaceholderImage.propTypes = {
  size: PropTypes.object.isRequired,
  styles: PropTypes.object.isRequired,
};

PlaceholderImage.defaultProps = {
  size: {
    width: 350,
    height: 150,
  },
  styles: {
    maxWidth: '100%',
    height: 'auto',
  },
};

export default PlaceholderImage;
