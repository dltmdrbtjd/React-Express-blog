import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './modules/store';
import { history } from './modules/reducers';
import GlobalThemeProvider from './styles/ThemeProvider';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <GlobalThemeProvider>
          <App />
        </GlobalThemeProvider>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);

reportWebVitals();
