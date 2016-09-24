import React, { PropTypes, Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from './actions';
import App from 'grommet/components/App';
import { Navbar } from '../../components';

class Main extends Component {
  render() {
    const {
      location,
    } = this.props;
    return (
      <App centered>
        <Navbar pathname={location.pathname} />
        {React.cloneElement(this.props.children, this.props)}
      </App>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object.isRequired,
};

// Map the global state to global props here.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
// mapStateToProps :: {State} -> {Action}
const mapStateToProps = (state) => ({
  messages: state.messages,
  errors: state.errors,
});

// Map the dispatch and bind the action creators.
// See: http://redux.js.org/docs/api/bindActionCreators.html
// mapDispatchToProps :: Dispatch Func -> {Actions}
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(
    actionCreators,
    dispatch
  ),
});

// Use connect both here and in your components.
// See: https://egghead.io/lessons/javascript-redux-generating-containers-with-connect-from-react-redux-visibletodolist
const ConnectedApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);

export default ConnectedApp;
