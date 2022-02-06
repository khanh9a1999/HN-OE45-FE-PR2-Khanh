import React, { useState } from 'react';
import NavTypes from './components/NavTypes/NavTypes'
import { Container, Row, Col } from 'react-bootstrap'
import styles from './Home.module.sass'
import  Categories  from './components/Categories/Categories'
import Brands from './components/Brands/Brands'
import Rating from './components/Rating/Rating'
import Prices from './components/Prices/Prices'
import Products from './components/Products/Products';
import { Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { clearAllFilter } from '../../store/slices/ProductSlice'

function HomePage() {

    const dispatch = useDispatch()
    const [ isClearFilter, setIsClearFilter ] = useState(false)
    const filter = useSelector( state => state.products.filter)

    useEffect(() => {
        const filterValuesArr = Object.values(filter)
        const flag = filterValuesArr.some(value => value !== '')
        setIsClearFilter(flag)
    }, [filter])

    function clearFilter() {
        dispatch(clearAllFilter())
    }

    return (
        <>
            <NavTypes />  
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <aside className="d-flex flex-column justify-content-center ps-3">
                            {
                                isClearFilter && <Button variant="outline-primary" className={styles["btn-clear"]} onClick={clearFilter}>Clear Filter</Button>
                            }
                            <Categories />
                            <hr />
                            <Brands />
                            <hr />
                            <Prices />
                            <hr />
                            <Rating />
                        </aside>
                    </Col>
                    <Col md={9}>
                        <Products />
                    </Col>
                </Row>
            </Container> 
        </>
    );
}

export default HomePage;
