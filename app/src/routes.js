import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

if (typeof module !== 'undefined' && module.require) {
  if (typeof require.ensure === 'undefined') {
    require.ensure = require('node-ensure');
  }
}

export const routes = {
  component: App,
  path: '/',
  indexRoute: {
    getComponent(location, callback) {
      require.ensure([], () => {
        const LandingPage = require('./pages/LandingPage').default;
        callback(null, LandingPage);
      });
    },
  },
  childRoutes: [
    {
      path: 'about',
      getComponent(location, callback) {
        require.ensure([], () => {
          const AboutPage = require('./pages/AboutPage').default;
          callback(null, AboutPage);
        });
      },
    },
    {
      path: 'terms',
      getComponent(location, callback) {
        const TermsPage = require('./pages/TermsPage').default;
        callback(null, TermsPage);
      },
    },
    {
      path: 'privacy',
      getComponent(location, callback) {
        const PrivacyPage = require('./pages/PrivacyPage').default;
        callback(null, PrivacyPage);
      },
    },
    {
      path: '*',
      getComponent(location, callback) {
        const NotFoundPage = require('./pages/NotFoundPage').default;
        callback(null, NotFoundPage);
      },
    },
  ],
};

const RouterApp = (props) => (
  <ApolloProvider {...props} store={store} client={client}>
    <Router
      onUpdate={() => { // eslint-disable-line
        window.scrollTo(0, 0);
      }}
      history={history}
    >
      {routes}
    </Router>
  </ApolloProvider>
);

export default RouterApp;
