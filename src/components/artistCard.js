import React, { useState } from "react"
import axios from "axios";
import { Button, Container, Card } from 'react-bootstrap';

import { EventCards } from "./eventCards";

export const ArtistCard = ({ artist }) => {
    const [events, setEvents] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.get(`https://rest.bandsintown.com/artists/${artist?.name}/events?app_id=abc`)
        setEvents(response?.data)
    }
    return (
        <>
            <Container className='mt-5'>
                <Card style={{ width: '18rem' }} className='p-2'>
                    <Card.Img variant="top" src={artist?.image_url} />
                    <Card.Body>
                        <Card.Title>{artist?.name}</Card.Title>
                        <a href={artist?.url} style={{ textDecoration: 'none' }}>
                            <Card.Text>
                                Bands In Town Profile
                            </Card.Text>
                        </a>

                        <Button onClick={handleSubmit} variant="primary" className='mt-3'>Show Events</Button>
                    </Card.Body>
                </Card>
            </Container>
            {events.length != 0 ? (
                <EventCards events = {events} />
            ) : null}
        </>


    )
}