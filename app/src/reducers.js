import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';
import contentStream from './containers/ContentStreamContainer/reducer';
import landing from './containers/LandingContainer/reducer';
import client from './apolloClient';

const rootReducer = combineReducers({
  // Apply all of the reducers here.
  contentStream,
  landing,
  routing: routerReducer,
  form: formReducer,
  apollo: client.reducer(),
});

export default rootReducer;
