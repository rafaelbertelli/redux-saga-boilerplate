import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../pages/main';
import Footer from '../components/footer';

const Routes = () => (
  <BrowserRouter>
    <>
      <Switch>
        <Route path="/" exact component={Main} />
      </Switch>
      <Footer />
    </>
  </BrowserRouter>
);

export default Routes;
