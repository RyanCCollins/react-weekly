import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
/* eslint-disable */
import App from 'components/App';
import * as Pages from 'pages';
/* eslint-enable */

const routes = (
  <Provider store={store}>
    <Router
      onUpdate={() => { // eslint-disable-line
        window.scrollTo(0, 0);
        const DOMLoaded = document.createEvent('Event');
        DOMLoaded.initEvent('DOMContentLoaded');
        window.document.dispatchEvent(DOMLoaded);
      }}
      history={history}
    >
      <Route path="/" component={App}>
        <IndexRoute component={Pages.LandingPage} />
        <Route path="/about" component={Pages.AboutPage} />
          <Route path="*" component={Pages.NotFoundPage} />
      </Route>
    </Router>
  </Provider>
);

export default routes;
