import React from 'react';
import NavTypes from './components/NavTypes/NavTypes'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Home.module.sass'
import  Categories  from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Rating from './components/Rating/Rating'
import Prices from './components/Prices/Prices'
import { Button } from 'react-bootstrap'

function HomePage() {
    return (
        <>
            <NavTypes />  
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <aside className="d-flex flex-column justify-content-center ps-3">
                            <Button variant="outline-primary" className={styles["btn-clear"]}>
                                Clear Filter
                            </Button>
                            <Categories />
                            <hr />
                            <Brands />
                            <hr />
                            <Prices />
                            <hr />
                            <Rating />
                        </aside>
                    </Col>
                </Row>
            </Container> 
        </>
    );
}

export default HomePage;
