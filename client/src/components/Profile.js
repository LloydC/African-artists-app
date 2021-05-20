import React from "react";
import LogoutButton from '../components/LogoutButton';
import { useAuth0 } from "@auth0/auth0-react";
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  console.log('user', user);
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <Title level={2}>{user.name}</Title>
        <img src={user.picture} alt={user.name} style={{borderRadius: '50%'}} />
        <Paragraph>{user.email}</Paragraph>
        <LogoutButton/>
      </div>
    )
  );
};

export default Profile;