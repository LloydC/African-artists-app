import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Nav from './components/Nav';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/Register';
import ProfilePage from './pages/ProfilePage';
import { Layout } from 'antd';
import './App.css';
const { Footer } = Layout;

function App() {
  const { user, isAuthenticated } = useAuth0();

  return (
    <Router>
      <Nav isLoggedIn={isAuthenticated}/>

      <Layout>
        <Routes>
          <Route path="/" element={<HomePage user={user} />}/>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/register" element={<RegisterPage />}/>
          <Route path="/profile" element={<ProfilePage user={user} />}/>
        </Routes>
      </Layout>
      <Footer>Blend of African Music ©2023</Footer>
    </Router>
  );
}

export default App;