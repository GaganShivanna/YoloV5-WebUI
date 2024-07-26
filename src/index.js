import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import  ThemeContextProvider  from '../../landing-page-template/src/components/ThemeContext';


const domain = process.env.REACT_APP_AUTH_DOMAIN;
const client = process.env.REACT_APP_AUTH_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
     domain={domain}
     clientId={client}
     authorizationParams={{ redirect_uri:window.location.origin}}>
     <ThemeContextProvider> 
        <App />
      </ThemeContextProvider>
  </Auth0Provider>
  </React.StrictMode>
);
