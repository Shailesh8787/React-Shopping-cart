import * as React from "react";
import * as ReactDOM from "react-dom";
import Routers from './routers';
import { Provider } from 'react-redux';
import { store } from './redux/store';

import "./styles/global.scss";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Routers />
    </Provider>
</React.StrictMode>,
  document.getElementById('app'));