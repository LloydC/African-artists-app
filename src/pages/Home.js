import 'antd/dist/antd.css';
import React, { useState } from 'react';
import AfricaMap from '../components/AfricaMap';
import { Layout } from 'antd';
const { Content } = Layout;

function Home() {
    const [hovered, setHovered] = useState('None');
    // const [focused, setFocused] = useState('None');
    const [clicked, setClicked] = useState('None');

    return (
        <Content className="site-layout"style={{ padding: '0 50px'}}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}
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
                <AfricaMap hovered={hovered} clicked={clicked} setHovered={setHovered} setClicked={setClicked}/>
              </div>
              
              {hovered === 'None' && clicked ==='None' && <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <h1>Welcome Username</h1>
                <br/>
                <p>Check out the map or search for Artists we know with African Heritage</p>
                <br/>
                <p>Feel free to add them to your playlist below</p>
              </div>}

              {clicked!== 'None' && <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <h1>Country clicked: {clicked}</h1>
              </div>}
            </div>
          </div>
        </Content>
    )
}

export default Home
