import { combineReducers } from 'redux';
import App from './app/reducer';
import User from './admin/user/reducer';
import Blog from './admin/blog/reducer';
import Auth from './auth/reducer';
import demo from './demo/api';


import ThemeSwitcher from './themeSwitcher/reducer';

const appReducers = combineReducers({
  App,
  Auth,
  User,
  Blog,
  ThemeSwitcher,
  demo
});

export default appReducers;