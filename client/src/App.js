import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './components/Nav';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import { Layout } from 'antd';
// const { Footer } = Layout;

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Router>
      <Nav isLoggedIn={isAuthenticated}/>

      <Layout>
        <Switch>
          <Route exact path="/" render={(props) => (<HomePage {...props} user={user} />)}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
          <Route exact path="/profile" render={(props) => (<ProfilePage {...props} user={user} />)}/>
        </Switch>
      {/* <Footer style={{ textAlign: 'center'}}>African Artists ©2021 Created by King Code</Footer> */}
      </Layout>
    </Router>
  );
}

export default App;