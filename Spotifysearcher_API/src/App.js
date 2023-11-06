import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, InputGroup, FormControl, Button, Row, Card } from 'react-bootstrap';
import { useState, useEffect } from 'react';

const CLIENT_ID ="4656788a4330aa14b26aa5103670483668a";
const CLIENT_SECRET ="ae443452d65b8fa4538bb6ab92531bf5ad8";

export default function App(){

    const [searchInput, setSearchInput] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        //API Access Token

        var authParameters ={
            method: 'POST',
            headers:{
                'Content-type': 'application/x-www-form-urlencoded'
            },
            body: 'grant_type=client_credentials&client_id=' + CLIENT_ID + '&client_secret=' +CLIENT_SECRET

        }
        fetch('https://accounts.spotify.com/api/token',authParameters)
            .then(result => result.json())
            //.then(data => console.log(data))
            //.then(data => console.log(data.access_token))
            .then(data => setAccessToken(data.access_token))
    }, [])


        // Search
        async function search(){
            console.log("search for " + searchInput);
        

        // Using GET request to search for the Artist ID
            var searchParameters = {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + accessToken
                }
            }
            var artistID = await fetch('https://api.spotify.com/v1/search?q=' + searchInput + '&type=artist' ,searchParameters)
                .then(response => response.json())
                //.then(data => console.log(data))
                .then(data => {return data.artists.items[0].id})

                console.log("Artist ID is " + artistID);// displays the artist ID stored in the artistID variable
                
        // Get request with Artist ID grab all the albums from that artist
                var returnedAlbums = await fetch('https://api.spotify.com/v1/artists/' + artistID + '/albums' + '?include_groups=album&market=US&limit=50', searchParameters)
                    .then(response => response.json())
                    .then(data => {
                        console.log(data)
                        setAlbums(data.items);
                    });
        // Display those albums to the user
        }
            console.log(albums);

    return(
        <div className='App'>
            
            <Container>
                <InputGroup className='mb-3' size='lg'>
                    <FormControl 
                        placeholder='Search For Artist'
                        type='input'
                        onKeyPress={event => {
                            if (event.key == "Enter"){
                                search();
                            }
                        }}
                        onChange={event => setSearchInput(event.target.value)}
                    />
                    <Button onClick={search}>
                        Search
                    </Button>
                </InputGroup>
            </Container>

            <Container>
                        <Row className='mx-2 row row-cols-4'>
                            {albums.map((album, i) =>{
                                console.log(album);
                                return(
                                    <Card>
                                    <Card.Img src={album.images[0].url} />  
                                    <Card.Body>
                                    <Card.Title>{album.name}</Card.Title>
                                    </Card.Body>  
                                </Card>
                                )
                            })}
                           
                        </Row>

                
            </Container>
        </div>
    )
}
