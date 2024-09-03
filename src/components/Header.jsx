import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestuarant } from '../redux/restuarantSlice';

function Header() {
    const dispatch = useDispatch();
    return (
        <>
            <Navbar variant='dark'>
                <Container>
                    <Link to={'/'} style={{ textDecoration: "none", overflowY: 'hidden' }}>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Navbar.Brand >
                                <img
                                    alt=""
                                    src="https://imgs.search.brave.com/jl3b9nLa45CC2imRB7RtDOAb-cjnbsFLbUio3CJ4q5E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4t/aWNvbnMtcG5nLmZy/ZWVwaWsuY29tLzI1/Ni8zMjA3LzMyMDc5/NDkucG5nP3NlbXQ9/YWlzX2h5YnJpZA"
                                    width="30"
                                    height="30"
                                    className="d-inline-block align-top me-2"
                                />{' '}
                                FOOD <span className='text-warning'>CIRCLE</span>
                            </Navbar.Brand>
                            <input onChange={(e)=>dispatch(searchRestuarant(e.target.value))} type="text" className='form-control ms-5 w-100' placeholder='Search by Neighbour Hood' />
                        </div>
                    </Link>
                </Container>
            </Navbar>
        </>
    )
}

export default Header