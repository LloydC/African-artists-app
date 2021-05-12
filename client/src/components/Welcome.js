import React from 'react';

function Welcome(){
    return (
        <div style={{
            width: '100%',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
        <h1>Welcome Username</h1>
        <br/>
        <p>Check out the map or search for Artists we know with African Heritage</p>
        <br/>
        <p>LAUNCH MUSIC PLAYER</p>
        <iframe title="embedded-test" src="https://open.spotify.com/embed/playlist/3ctCB0A3pLPNh0KCKvwOHD" width="300" height="80" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
      </div>
    );

}

export default Welcome;