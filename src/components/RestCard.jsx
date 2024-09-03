import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function RestCard({resturant}) {
    return (
        <>
            <Link to={`/resturant_view/${resturant?.id}`} style={{textDecoration:"none"}}>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={resturant.photograph} />
                    <Card.Body>
                        <Card.Title className='text-center text-warning' style={{fontSize:"20px"}}>{resturant.name}</Card.Title>
                        <Card.Text className='text-center'>
                            Neighbour Hood : <span className='text-warning ms-2'>{resturant.neighborhood}</span>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Link>
        </>
    )
}

export default RestCard