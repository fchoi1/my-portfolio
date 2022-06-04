import React from 'react';
import { Router, Redirect } from '@reach/router';
import MainPage from 'pages';

const App = () => (
  <Router>
    <Route exact path="/" component={<MainPage />} />
    <Route path="*" component={<Redirect from="*" to="/" />} />
  </Router>
);
export default App;
