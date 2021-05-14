import React from 'react';
import Artist from './Artist/Artist';
import { Typography, Spin  } from 'antd';

const { Title } = Typography;

function ArtistsList({ artists, clicked }){
    return (
        <>
            <Title level={1}>Artists from {clicked} </Title>
            {artists === undefined && clicked !== 'None' ?
             <Spin size="large"/> :
             <div style={{display: 'flex', justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {artists.artists.items.map(artist =>(
                    <Artist artist={artist}/>
                ))}
            </div>}
        </>
    );
}

export default ArtistsList;