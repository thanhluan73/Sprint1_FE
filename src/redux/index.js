import { combineReducers } from 'redux';
import App from './app/reducer';
import User from './admin/user/reducer';
import Blog from './admin/blog/reducer';
import Auth from './auth/reducer';

const appReducers = combineReducers({
  App,
  Auth,
  User,
  Blog
});

export default appReducers;