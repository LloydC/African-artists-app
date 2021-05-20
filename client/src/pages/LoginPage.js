import React from 'react';
import LoginButton from '../components/LoginButton';
import { Typography } from 'antd';

const { Title } = Typography;

function Login() {
    return (
        <div style={{ height: '90vh', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
            <Title level={1}>Login To Your Account</Title>
            <br/>
            <LoginButton/>
        </div>
    )
}

export default Login
