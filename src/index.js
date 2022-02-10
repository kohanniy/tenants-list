import React from 'react';
import ReactDOM from 'react-dom';
import { store } from './app/store';
import { Provider } from 'react-redux';
import DefaultThemeProvider from './themes/defaultTheme';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <DefaultThemeProvider>
      <App />
    </DefaultThemeProvider>
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
