import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import store, { history } from './store';
import { ApolloProvider } from 'react-apollo';
import client from './apolloClient';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <ApolloProvider store={store} client={client}>
    <Router
      onUpdate={() => { // eslint-disable-line
        window.scrollTo(0, 0);
      }}
      history={history}
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="/about" component={Pages.AboutPage} />
        <Route path="/terms" component={Pages.TermsPage} />
          <Route path="/privacy" component={Pages.PrivacyPage} />
          <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </ApolloProvider>
);

export default routes;
