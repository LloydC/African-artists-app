import React from 'react';
import { Typography } from 'antd';

const { Paragraph, Title } = Typography;

function Welcome({user}){
    return (
        <div className='welcome-container'>
        <Title level={1}>{user !== undefined ? `Welcome ${user.name}` : 'Blend of African Music'}</Title>
        <Paragraph>Select countries on the map to learn about their favourite artists </Paragraph>
        {/* <iframe title="embedded-test" src="https://open.spotify.com/embed/playlist/3ctCB0A3pLPNh0KCKvwOHD" width="75%" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
      </div>
    );

}

export default Welcome;