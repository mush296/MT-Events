import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, Container, Card } from 'react-bootstrap';
import { useCookies } from 'react-cookie';
import { ArtistCard } from './artistCard';

export const Search = () => {
    const [artist, setArtist] = useState(null)
    const [cookies, setCookie, removeCookie] = useCookies(["artist"]);

    useEffect(() => {
        console.log("Test", cookies);

        if (artist === null && cookies.artist) {
            setArtist(cookies.artist);
        }
    }, [artist]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        removeCookie("artist", { path: "/" });
        setArtist(null);

        const artistName = document.getElementById("input").value;
        const response = await axios.get(`https://rest.bandsintown.com/artists/${artistName}?app_id=abc`)
        setArtist(response?.data)
        setCookie("artist", response?.data, { path: "/", sameSite: "lax" });
    }
    return (
        <>
            <Container>
                <Form>
                    <Form.Group style={{ width: "500px", margin: "auto" }} className="mb-3 mt-4 justify-center" controlId="formBasicEmail">
                        <Form.Control type="text" placeholder="Enter Artist Name" id='input' />
                    </Form.Group>
                    <div className='text-center'>
                        <Button style={{ margin: "auto" }} variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </div>

                </Form>
            </Container>
            {artist != null ? (
                <ArtistCard artist={artist} />
            ) : null}
        </>
    )
}

