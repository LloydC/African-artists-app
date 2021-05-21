import React, {useState} from 'react';
import Artist from './Artist/Artist';
import { Typography, Spin  } from 'antd';

const { Title } = Typography;


function ArtistsList({ artists, clicked }){
    const [selectArtist, setSelectArtist] = useState(undefined);
    //  const [details, setDetails] = useState(undefined);

    function TestingBox(){
        return (
            <div onClick={()=> {setSelectArtist(undefined);}}>
                <Artist artist={selectArtist}/>
            </div>
        );
    }

    return (
        <>
            <Title level={1}>Artists from {clicked} </Title>
            {artists === undefined && clicked !== 'None' ?
             <Spin size="large"/> :
             <div style={{display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', border: '1px solid black'}}>
                {selectArtist === undefined && artists.artists.items.map(artist =>(
                    <Artist artist={artist} key={artist.id} setSelectArtist={setSelectArtist}/>
                ))}
                {selectArtist !== undefined && <TestingBox/>}
            </div>}
        </>
    );
}

export default ArtistsList;