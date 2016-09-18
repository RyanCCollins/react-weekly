import React, { PropTypes } from 'react';
import styles from './index.module.scss';
import cssModules from 'react-css-modules';
import Layer from 'grommet/components/Layer';
import Section from 'grommet/components/Section';
import Box from 'grommet/components/Box';

class ModalDialog extends React.Component {
  constructor() {
    super();
  }
  componentWillReceiveProps({ isVisible }) {
    if (this.props.isVisible !== isVisible) {
      if (isVisible) {
        document.documentElement.classList.add('no-scroll');
      } else {
        document.documentElement.classList.remove('no-scroll');
      }
    }
  }
  render() {
    const {
      isVisible,
      onClose,
      children,
    } = this.props;
    return (
      <Layer align="center" closer hidden={!isVisible} onClose={onClose}>
        <Section align="center" justify="center">
          <Box
            align="center"
            size="medium"
            style={{ minHeight: 100 }}
            pad={{ horizontal: 'large', vertical: 'large' }}
          >
            {children}
          </Box>
        </Section>
      </Layer>
    );
  }
}

ModalDialog.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node,
};

ModalDialog.defaultProps = {
  isVisible: false,
};

export default cssModules(ModalDialog, styles);
