import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PostCreate from './components/organisms/PostCreate';
// router
// import LoginPage from './pages/Login';
import MainPage from './pages/Main';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/posting" component={PostCreate} exact />
      {/* <Route path="/login" component={LoginPage} exact /> */}
    </Switch>
  );
}

export default App;
