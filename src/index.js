import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './templates/Home';
import { GlobalStyles } from '../styles/global-styles';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <BrowserRouter>
      <Switch>
        <Route path="/artigo" component={Home} />
        <Home />
      </Switch>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
