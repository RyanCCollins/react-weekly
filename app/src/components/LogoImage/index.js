import React, { PropTypes } from 'react';
import Image from 'grommet/components/Image';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';

const LogoImage = ({
  size,
  src,
  style,
}) => (
  <div style={style}>
    <Image size={size} src={src} alt="React Weekly" />
  </div>
);

LogoImage.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large', 'thumb']),
  src: PropTypes.string.isRequired,
  style: PropTypes.object,
};

LogoImage.defaultProps = {
  size: 'small',
  src: 'https://github.com/RyanCCollins/cdn/blob/master/react-weekly/react-weekly-logo.png?raw=true',
};

export default cssModules(LogoImage, styles);
