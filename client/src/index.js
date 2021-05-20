import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from "@auth0/auth0-react";
import reportWebVitals from './reportWebVitals';
import { ConfigProvider } from 'antd';
import frFR from 'antd/lib/locale/fr_FR';

ReactDOM.render(
  <React.StrictMode>
    <ConfigProvider locale={frFR}>
      <Auth0Provider
      domain="dev-jzkemv6j.eu.auth0.com"
      clientId="Wx18PFqe87jqzHuaJkIGA0FBfTJbA4N2"
      redirectUri={window.location.origin}
    >
        <App />
      </Auth0Provider>
    </ConfigProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
