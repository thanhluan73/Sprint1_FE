import React from "react";
import { Provider } from "react-redux";
import PublicRoutes from "./router";
import { ThemeProvider } from "styled-components";
import { LocaleProvider } from "antd";
import { IntlProvider } from "react-intl";
import themes from "./settings/themes";
import AppLocale from "./languageProvider";
import config, {
  getCurrentLanguage
} from "./containers/LanguageSwitcher/config";
import { themeConfig } from "./settings";
import DashAppHolder from "./dashAppStyle";

import { createStore, applyMiddleware ,compose} from 'redux'; 
import appReducers from './redux/index'

import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router';;
const history = createBrowserHistory();
const reactRouterMiddleware = routerMiddleware(history); 
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middleWares = [ thunk, reactRouterMiddleware ];
const store = createStore(
    connectRouter(history)(appReducers), 
    composeEnhancer(
        applyMiddleware(...middleWares)
    ),
);

const currentAppLocale =
  AppLocale[getCurrentLanguage(config.defaultLanguage || "english").locale];

const DashApp = () => (
  <LocaleProvider locale={currentAppLocale.antd}>
    <IntlProvider
      locale={currentAppLocale.locale}
      messages={currentAppLocale.messages}
    >
      <ThemeProvider theme={themes[themeConfig.theme]}>
        <DashAppHolder>
          <Provider store={store}>
            <PublicRoutes history={history} />
          </Provider>
        </DashAppHolder>
      </ThemeProvider>
    </IntlProvider>
  </LocaleProvider>
);
// Boot()
//   .then(() => DashApp())
//   .catch(error => console.error(error));

export default DashApp;
export { AppLocale };
