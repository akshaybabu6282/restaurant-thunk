import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestaurant } from '../redux/restuarantSlice';

function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRestaurant())
    }, [])
    const allRestaurant = useSelector((state) => state.restuarantSlice.allRestaurant.restaurants);
    console.log("1");
    console.log(allRestaurant);


    return (
        <>
            <Row className='mt-3'>
                {
                    allRestaurant?.length > 0 ?
                        allRestaurant.map((resturant) => (
                            <Col sm={6} md={4} lg={3} className='px-5 py-3'>
                                <RestCard resturant={resturant}/>
                            </Col>
                        )):
                <p>No item found</p>
}

            </Row>
        </>
    )
}

export default Home