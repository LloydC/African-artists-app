import './App.css';
import 'antd/dist/antd.css';
import React from 'react';
// import MapChart from './components/MapChart';
import AfricaMap from './components/AfricaMap';
import Nav from './components/Nav';
import { Layout, Breadcrumb } from 'antd';
const { Content, Footer } = Layout;


function App() {
  return (
    <div className="App">
      <Layout>
        <Nav isLoggedIn={true}/>

        <Content className="site-layout"style={{ padding: '0 50px'}}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 640, height: '100%'}}>
            <div style={{
              width: '100%',
              height: '90vh',
              display: 'flex'
            }}>
              <div style={{
              width: '100%',
              height: '100%',
            }}>
                {/* <MapChart/> */}
                <AfricaMap/>
              </div>
              
              <div style={{
              width: '100%',
              height: '100%',
            }}>
                App Display container
              </div>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>African Artists ©2021 Created by King Code</Footer>
      </Layout>
    </div>
  );
}

export default App;
