import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Nav from './components/Nav';
import Home from './pages/Home';
import { Layout } from 'antd';
const { Footer } = Layout;


function App() {
  return (
    <Router>
      <Layout>
      <Nav isLoggedIn={true}/>

        <Switch>
        <Route path="/">
            <Home />
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