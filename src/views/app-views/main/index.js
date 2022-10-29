import React, { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Loading from 'components/shared-components/Loading';

const Main = ({ match }) => (
  <Suspense fallback={<Loading cover="content"/>}>
    <Switch>
      <Route path={`${match.url}/dashboard`} component={lazy(() => import(`./dashboard`))} />
      <Route path={`${match.url}/clients`} component={lazy(() => import(`./clients`))} />
      <Redirect exact from={`${match.url}`} to={`${match.url}/dashboard`} />
    </Switch>
  </Suspense>
);

export default Main;

