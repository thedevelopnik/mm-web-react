// firebase
import firebase from "firebase";
firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET
});

// react
import React from "react";
import ReactDOM from "react-dom";
import { browserHistory } from "react-router";
import injectTapEventPlugin from "react-tap-event-plugin";



// redux
import configureStore from "./redux/store/configureStore";
import { syncHistoryWithStore } from "react-router-redux";

// Material-UI
import lightBaseTheme from "material-ui/styles/baseThemes/lightBaseTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import getMuiTheme from "material-ui/styles/getMuiTheme";

// components
import Root from "./components/containers/Root";

injectTapEventPlugin();

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(lightBaseTheme)}>
    <Root store={store} history={history} />
  </MuiThemeProvider>,
  document.getElementById("root")
);
