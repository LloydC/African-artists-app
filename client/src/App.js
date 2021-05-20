import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './components/Nav';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login';
 import RegisterPage from './pages/Register';
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
        </Switch>
      {/* <Footer style={{ textAlign: 'center'}}>African Artists ©2021 Created by King Code</Footer> */}
      </Layout>
    </Router>
  );
}

export default App;