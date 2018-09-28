import { combineReducers } from 'redux';
import { reducer as accountReducer } from 'services/account/reducer';
import { reducer as sessionReducer } from 'services/session/reducer';

export default combineReducers({
  account: accountReducer,
  session: sessionReducer,
});
