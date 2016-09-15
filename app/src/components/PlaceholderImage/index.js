import React, { PropTypes } from 'react';

const PlaceholderImage = ({
  size,
  styles,
  text,
}) => (
  <img
    src={`http://placehold.it/${size.width}x${size.height}?text=${text}`}
    styles={styles}
  />
);

PlaceholderImage.propTypes = {
  size: PropTypes.shape({
    height: PropTypes.number.isRequired,
    width: PropTypes.number.isRequired,
  }),
  styles: PropTypes.object.isRequired,
  text: PropTypes.string.isRequired,
};

PlaceholderImage.defaultProps = {
  text: 'Nothing to see here',
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
