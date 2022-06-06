import React from "react";
import moment from 'moment';
import { Container, Card, Row, Col } from 'react-bootstrap';

export const EventCards = ({ events }) => {

    return (
        <Container className="py-4">
            <Row>
                {events.map((event, index) => {
                    return (index / 3 == 0 && index != 0) ? (
                        <Row className="m-3">
                            <Col className="mt-2 mb-2">
                                <Card style={{ width: '18rem'}} className='p-4 m-6'>
                                    <Card.Body>
                                        <Card.Title>Event Details</Card.Title>
                                        <Card.Text>Country</Card.Text>
                                        <Card.Text>{event?.venue?.country}</Card.Text>

                                        <Card.Text>City</Card.Text>
                                        <Card.Text>{event?.venue?.city}</Card.Text>

                                        <Card.Text>Venue</Card.Text>
                                        <Card.Text>{event?.venue?.name}</Card.Text>

                                        <Card.Text>Date</Card.Text>
                                        <Card.Text>{moment(event?.datetime).format("MMMM Do YYYY")}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    ) : (
                        <Col className="mt-5">
                            <Card style={{ width: '18rem' }} className='p-2'>
                                <Card.Body>
                                    <Card.Title>Event Details</Card.Title>
                                    <Card.Text><span style={{fontWeight:"bold"}}>Country:</span> {event?.venue?.country}</Card.Text>
                                    <Card.Text><span style={{fontWeight:"bold"}}>City:</span> {event?.venue?.city}</Card.Text>
                                    <Card.Text><span style={{fontWeight:"bold"}}>Venue:</span> {event?.venue?.name}</Card.Text>
                                    <Card.Text><span style={{fontWeight:"bold"}}>Date:</span> {moment(event?.datetime).format("MMMM Do YYYY")}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    )
}