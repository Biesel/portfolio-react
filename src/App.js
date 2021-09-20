import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Home } from './pages';
// import * as ROUTES from './constants/routes';
// import { IsUserRedirect, ProtectedRoute } from './helpers/routes.js';
// import { useAuthListener } from './hooks';

export function App() {
//   const { user } = useAuthListener();

  return (
    <Router>
      <Switch>
          <Home />
      </Switch>
    </Router>
  );
}
