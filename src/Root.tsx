import React, { FunctionComponent } from 'react';

import App from './App';
import Welcome from './screens/Welcome';
import { Provider } from "react-redux";
import configureStore from "./store";

const store = configureStore();

const Root: FunctionComponent = () => (
  <Provider store={store}>
    <App>
      <Welcome />
    </App>
  </Provider>
);

export default Root;
