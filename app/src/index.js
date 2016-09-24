/* eslint-disable */ // React must be in scope here
import React from 'react';
/* eslint-enable */
import { render } from 'react-dom';
import { routes } from './routes';
import RouterApp from './routes';
import { match } from 'react-router';
import { history } from './store';
const mountPoint = document.getElementById('app');
import '../styles/styles.scss';

match({ history, routes },
  (error, redirectLocation, renderProps) => {
    if (error) {
      return console.error('Require.ensure error in index.js'); // eslint-disable-line
    }
    render(<RouterApp {...renderProps} />, mountPoint);
  });
