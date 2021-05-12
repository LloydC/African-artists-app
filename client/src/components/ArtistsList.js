import React from 'react';
import Artist from './Artist';

function ArtistsList({ artists, clicked }){
    return (
        <>
            <h1>Artists from {clicked} </h1>
            <div style={{display: 'flex', justifyContent: 'space-around',flexWrap: 'wrap'}}>
                {artists !== undefined && artists.artists.items.map(artist =>(
                    <Artist artist={artist}/>
                ))}
            </div>
        </>
    );
}

export default ArtistsList;