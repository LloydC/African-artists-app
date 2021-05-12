import React from 'react';

function Artist({ artist }){
    return (
        <div key={artist.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h3>{artist.name}</h3>
            {artist.images.length === 0 && <img alt='artist_photo' style={{borderRadius: '50%'}} src={'/images/Default-profile.png'} width='100px' height='100px'/>}
            {artist.images.length !== 0 && <img alt='artist_photo' style={{borderRadius: '50%'}} src={artist.images[0].url} width='100px' height='100px'/>}
            {artist.followers?.total && <p>Followers: {artist.followers.total}</p>}
        </div>
    )
}

export default Artist;