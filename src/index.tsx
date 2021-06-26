import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {NotFound} from './components/NotFound'
import { MarkdownViewer } from './containers/MarkdownViewer';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route exact={true} path="/" component={MarkdownViewer}/>
      <Route path="/about" component={MarkdownViewer}/>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
