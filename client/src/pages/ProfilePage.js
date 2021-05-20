import React from 'react';
import Profile from '../components/Profile';

function ProfilePage(){
    return(
        <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Profile/>
        </div>
    );
}

export default ProfilePage;