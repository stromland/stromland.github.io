import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { NotFound } from './components/NotFound';
import { Layout } from './components/Layout';
import { MarkdownViewer } from './containers/MarkdownViewer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact={true} path="/" component={MarkdownViewer} />
          <Route path="/about" component={MarkdownViewer} />
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Layout>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
