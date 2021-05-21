import React from 'react';
import { Statistic, Typography } from 'antd';
import './Artist.css'

const { Title, Paragraph } = Typography;

function Artist({ artist }){
    return (
        <div className="artist-container" key={artist.id} >
            <Title level={4}>{artist.name}</Title>
            {artist.images.length === 0 ? 
            <img className="artist-picture" alt='artist_photo'  src={'/images/Default-profile.png'}/> :
            <img className="artist-picture" alt='artist_photo' src={artist.images[0].url}/>
            }
            {artist.followers?.total !== 0 ? <Statistic title="Followers" value={artist.followers.total}/> : <Paragraph>No followers</Paragraph>}
        </div>
    )
}

export default Artist;