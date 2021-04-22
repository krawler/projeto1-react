import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './templates/Home';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Switch>
        <Route path="/artigo" component={Home} />
        <Home />
      </Switch>      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
