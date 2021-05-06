import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
// import MapChart from './components/MapChart';
import Nav from './components/Nav';
import Home from './pages/Home';
import { Layout } from 'antd';
const { Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Nav isLoggedIn={true}/>

        <Home/>

        <Footer style={{ textAlign: 'center' }}>African Artists ©2021 Created by King Code</Footer>
      </Layout>
    </div>
  );
}

export default App;