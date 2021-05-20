import React from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

function Welcome({user}){
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '100px'
        }}>
        <Title level={1}>Welcome {user !== undefined ? user.name : ''}</Title>
        <Paragraph>Check out the map or search for Artists we know with African Heritage</Paragraph>
        <iframe title="embedded-test" src="https://open.spotify.com/embed/playlist/3ctCB0A3pLPNh0KCKvwOHD" width="50%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );

}

export default Welcome;