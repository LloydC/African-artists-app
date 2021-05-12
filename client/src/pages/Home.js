import 'antd/dist/antd.css';
import React, { useState, useEffect } from 'react';
import AfricaMap from '../components/AfricaMap';
import { Layout, Spin } from 'antd';
const { Content } = Layout;

function Home() {
    const [hovered, setHovered] = useState('None');
    const [clicked, setClicked] = useState('None');
    const [artists, setArtists] = useState(undefined);
    // const [focused, setFocused] = useState('None');

    const queryCountryMusic = async (country) => {
      const music= await fetch(`http://localhost:3000/search?country=${country}`).then((response) => response.json())
      return setArtists(music);
  }
    useEffect(()=>{
      if(clicked === 'None' && artists !== undefined){
        setArtists(undefined)
      }
      else if(clicked !== 'None' && artists === undefined){
       queryCountryMusic(clicked);
      }
    }, [artists, clicked])

    return (
        <Content className="site-layout"style={{ padding: '0 50px'}}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 640, height: '100vh'}}>
            <div style={{
                width: '100%',
                height: '90vh',
                display: 'flex'
            }}>
              <div style={{
                    width: '100%',
                    height: '90vh',
            }}>
                {/* <MapChart/> */}
                <AfricaMap hovered={hovered} clicked={clicked} setHovered={setHovered} setClicked={setClicked}/>
                {clicked !== 'None' && <p style={{textAlign: 'center'}}>You've selected <b>{clicked}</b></p>}
              </div>
              
              {hovered === 'None' && clicked ==='None' && <div style={{
                    width: '100%',
                    height: '100%',
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
              </div>}

              {clicked!== 'None' && <div style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    padding: '8%'
                }}>
                  {artists === undefined && clicked!== 'None' && <Spin size="large"/>}
                  {artists !== undefined && artists.artists.items.length === 0 ? 
                  <h1>No artists from {clicked} </h1> :
                  <>
                    <h1>Artists from {clicked} </h1>
                    <div style={{display: 'flex', justifyContent: 'space-around',flexWrap: 'wrap'}}>
                    {artists !== undefined && artists.artists.items.map(artist =>(
                      <div key={artist.id} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <h3>{artist.name}</h3>
                        {artist.images.length === 0 && <img alt='artist_photo' style={{borderRadius: '50%'}} src={'/images/Default-profile.png'} width='100px' height='100px'/>}
                        {artist.images.length !== 0 && <img alt='artist_photo' style={{borderRadius: '50%'}} src={artist.images[0].url} width='100px' height='100px'/>}
                        {artist.followers?.total && <p>Followers: {artist.followers.total}</p>}
                      </div>
                    ))}
                    </div>
                  </>
                }
              </div>}
            </div>
          </div>
        </Content>
    )
}

export default Home
