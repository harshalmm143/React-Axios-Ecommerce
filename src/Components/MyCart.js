import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import "./MyCart.css"
import { FaPlus, FaMinus } from "react-icons/fa";
import { clearCart, CalculateTotals, increase, decrease, removeItem } from './CartSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

function MyCart() {

    const dispatcher = useDispatch()
    const navi = useNavigate()

    const { cartItems, noOfItems, totalAmt } = useSelector((state) => state.cart)

    dispatcher(CalculateTotals())

    const orderItems = cartItems.map((cai) => ({
        item_id: cai.id,
        price: cai.price,
        qty: cai.qty,
        amount: cai.price * cai.qty
    }))

    console.log(orderItems)
    function placeorder() {
        const orderdata = {
            order_no: Math.floor(Math.random()*(999-100+1)+100),
            order_date: new Date(),
            order_amount: totalAmt,
            customer_id: "12",
            order: orderItems
        }
        axios.post("http://demoapi.dhanlakshmi.co/api/orders", orderdata)
            .then((result) => {
                console.log(result.data)
                alert("Order Placed")
            }).catch((err) => {
                console.log(err)
            });


    }

    return (
        <div>
            <Container className="cart-Container">
                <h5>Order Summary</h5>
                <Row>
                    <Col sm={6} md={6} lg={6}>
                        {
                            cartItems.map((ci) => {
                                const id = ci.id
                                return (
                                    <Card className='Cart-Card'>
                                        <Card.Body>
                                            <h4>Name :{ci.name}</h4>
                                            <h4>Price :{ci.price}</h4>
                                            <Card.Footer className='Cart-Fot'>
                                                <FaPlus className='cart-icon' onClick={() => dispatcher(increase({ id }))} />&nbsp;&nbsp;  {ci.qty}  &nbsp;&nbsp;<FaMinus onClick={() => dispatcher(decrease({ id }))} className='cart-icon' />
                                                <Button className='Remove-but' onClick={() => dispatcher(removeItem(id))}>Remove</Button>
                                            </Card.Footer>
                                        </Card.Body>
                                    </Card>
                                )
                            })
                        }

                    </Col>
                    <Col sm={6} md={6} lg={6}>
                        <div className="Cart-div">
                            <h4>Cheak Out</h4>
                            <h4>Total Number of Item : {noOfItems}</h4>
                            <h4>Total : {totalAmt}</h4>
                            <Button className="place-Gut" onClick={() => navi("/")}> Go to Home</Button>
                            <Button className="place-Cut" onClick={() => placeorder()}>Place Order </Button>
                            <Button className="place-but">Cheak Out</Button>
                        </div>
                    </Col>
                </Row>

            </Container>
        </div>
    )
}



export default MyCart