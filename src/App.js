import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
//import HomePage from './pages/Home';
// import LoginPage from './pages/Login';
 import RegisterPage from './pages/Register';
import { Layout } from 'antd';
const { Footer } = Layout;


function App() {
  return (
    <Router>
      <Layout>
      <Nav isLoggedIn={true}/>

        <Switch>
        <Route path="/">
            <RegisterPage />
          </Route>
          {/* <Route path="/about">
            <About />
          </Route>
          <Route path="/topics">
            <Topics />
          </Route> */}
          
        </Switch>
        <Footer style={{ textAlign: 'center' }}>African Artists ©2021 Created by King Code</Footer>
      </Layout>
    </Router>
  );
}

export default App;