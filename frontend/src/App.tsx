import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// router
import LoginPage from './pages/Login';
import MainPage from './pages/Main';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={MainPage} exact />
        <Route path="/login" component={LoginPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
