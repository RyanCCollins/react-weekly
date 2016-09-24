import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import createLogger from 'redux-logger';
import rootReducer from './reducers';
import client from './apolloClient';
// Import and combine initial state here:
import { initialState as contentStream } from './containers/ContentStreamContainer/reducer';
import { initialState as landing } from './containers/LandingContainer/reducer';

const initialState = {
  landing,
  contentStream,
};

const isDeveloping = process.env.NODE_ENV !== 'production';
const isClient = typeof document !== 'undefined';

const loggerMiddleware = createLogger();
const middlewares = [thunk, client.middleware()];

if (isDeveloping && isClient) {
  middlewares.push(loggerMiddleware);
}

const enhancers = [];
if (isClient && isDeveloping) {
  const devToolsExtension = window.devToolsExtension;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middlewares),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers,
);

/* See: https://github.com/reactjs/react-router-redux/issues/305 */
export const history = isClient ?
  syncHistoryWithStore(browserHistory, store) : undefined;

/* Hot reloading of reducers.  How futuristic!! */
if (module.hot) {
  module.hot.accept('./reducers', () => {
    /*eslint-disable */ // Allow require
    const nextRootReducer = require('./reducers').default;
    /*eslint-enable */
    store.replaceReducer(nextRootReducer);
  });
}

export default store;
