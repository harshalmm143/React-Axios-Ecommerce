import React, { useState, useEffect } from 'react'
import { Col, Row, Container, Card, Button } from 'react-bootstrap'
import "./Home.css"
import axios from 'axios'
import { addItem } from './CartSlice'
import { useDispatch } from 'react-redux'


function Home() {
    const [ProductData, setProductData] = useState([])

    const dispatcher = useDispatch()

    useEffect(() => {
        axios.get("http://demoapi.dhanlakshmi.co/api/items")
            .then((result) => {
                console.log(result.data)
                setProductData(result.data.data)
            }).catch((err) => {
                console.log(err)
            });
    }, [])


    return (
        <div>
            <Container className='Home-container'>
                <h5>Product</h5>
                <Row>
                    {
                        ProductData.map((product) => {
                            return (
                                <Col sm={12} md={6} lg={3}>
                                    <Card className='Home-Card'>
                                        <Card.Body>
                                            <h6>ID:{product.id}</h6>
                                            <h4>Name :{product.name}</h4>
                                            <h4>Price :{product.price}</h4>
                                            <Card.Footer className='Home-Fot'>
                                                <Button onClick={() => dispatcher(addItem(product))}>Add to Cart</Button>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }


                </Row>
            </Container>
        </div>
    )
}

export default Home