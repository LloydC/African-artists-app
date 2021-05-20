import 'antd/dist/antd.css';
import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Layout, Menu} from 'antd';
const { Header} = Layout;

function Nav({isLoggedIn}) {
  const { logout } = useAuth0();

    if(!isLoggedIn){
        return (
          <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
            <Link to="/"><div className="logo" /></Link>

            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1"><Link to="/login">Login</Link></Menu.Item>
              <Menu.Item key="2"><Link to="/register">Register</Link></Menu.Item>
            </Menu>
          </Header>
        )
    }
    else {
        return (
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%', display: 'flex', justifyContent: 'space-between' }}>
              <Link to="/"><div className="logo" /></Link>

              <Menu theme="dark" mode="horizontal">
                <Menu.Item key="1"><Link to="/profile">Profile</Link></Menu.Item>
                <Menu.Item key="2" onClick={() => logout({ returnTo: window.location.origin })}>Log Out</Menu.Item>
              </Menu>
            </Header>
        )
    }
}

export default Nav;