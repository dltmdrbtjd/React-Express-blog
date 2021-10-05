import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posting from './pages/Posting';
// router
// import LoginPage from './pages/Login';
import MainPage from './pages/Main';
import Post from './pages/Post';

function App() {
  return (
    <Switch>
      <Route path="/" component={MainPage} exact />
      <Route path="/posting" component={Posting} exact />
      <Route path="/post/:postId" component={Post} exact />
      {/* <Route path="/login" component={LoginPage} exact /> */}
    </Switch>
  );
}

export default App;
