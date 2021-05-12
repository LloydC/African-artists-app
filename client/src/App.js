import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import HomePage from './pages/Home/Home';
import LoginPage from './pages/Login';
 import RegisterPage from './pages/Register';
 import { Layout } from 'antd';
// const { Footer } = Layout;


function App() {
  return (
    <Router>
      <Nav isLoggedIn={true}/>

      <Layout>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/login" component={LoginPage}/>
          <Route exact path="/register" component={RegisterPage}/>
        </Switch>
      {/* <Footer style={{ textAlign: 'center'}}>African Artists ©2021 Created by King Code</Footer> */}
      </Layout>
    </Router>
  );
}

export default App;