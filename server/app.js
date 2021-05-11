require('dotenv').config();

const express = require('express');
const SpotifyWebApi = require('spotify-web-api-node');
const cors = require('cors')
// require spotify-web-api-node package here:

const app = express();

app.use(cors())
// setting the spotify-api goes here:
const spotifyApi = new SpotifyWebApi({
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET
  });

  spotifyApi
  .clientCredentialsGrant()
  .then(data => spotifyApi.setAccessToken(data.body['access_token']))
  .catch(error => console.log('Something went wrong when retrieving an access token', error));
// Our routes go here:
app.get('/search', (req, res)=>{
    const { country } = req.query;

    spotifyApi
    .search(country, ['artist', 'playlist', 'track'], { limit : 10, offset : 1 })
    .then(data => {
        const {artists, tracks, playlists } = data.body;
        const result = {artists, playlists, tracks};
        //const result = { artists: artists.items, playlists: playlists.items, tracks: tracks.items};
        // console.log('The received artists from the API: ', result.artists.items.length);
        // console.log('The received playlists from the API: ', result.playlists.items.length);
        // console.log('The received tracks from the API: ', result.tracks.items.length);
        res.json(result)
      
        })
        .catch(err => console.log('The error while searching artists occurred: ', err));
})

app.get('/search-artists', (req, res) =>{
    const { artist } = req.query;

    spotifyApi
    .searchArtists(artist)
    .then(data => {
        const result = JSON.stringify(data.body)
        console.log('The received data from the API: ', result);
        res.json(data.body.artists.items)
        // ----> 'HERE WHAT WE WANT TO DO AFTER RECEIVING THE DATA FROM THE API'
        })
        .catch(err => console.log('The error while searching artists occurred: ', err));
})

app.get('/albums/:artistId', (req, res, next) => {
    const { artistId } = req.params;

    spotifyApi
    .getArtistAlbums(artistId)
    .then(data => {
        const result = JSON.stringify(data.body)
        console.log('The received data from the API: ', result);
        res.send(data.body.items)
        });
})

app.get('/tracks/:albumId', (req, res, next) => {
    const { albumId } = req.params;

    spotifyApi
    .getAlbumTracks(albumId)
    .then(data => {
        const result = JSON.stringify(data.body)
        console.log('The received data from the API: ', result);
        res.send(data.body.items)
        });
})

app.listen(3000, () => console.log('My Spotify project running on port 3000 🎧 🥁 🎸 🔊'));
