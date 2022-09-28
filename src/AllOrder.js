import React, { useEffect, useState } from 'react'
import { Button, Container, Table } from "react-bootstrap"
import axios from 'axios'



function AllOrder() {

    const [ProductData, setProductData] = useState([])

    useEffect(() => {
        axios.get("http://demoapi.dhanlakshmi.co/api/orders")
            .then((result) => {
                console.log(result.data)
                setProductData(result.data.orders)
            }).catch((err) => {
                console.log(err)
            });
    }, [])


    function deleteOrder(id) {
        axios.delete("http://demoapi.dhanlakshmi.co/api/orders/".concat(id))
            .then((result) => {
                console.log("UserDelete")
                window.location.reload()

            }).catch((err) => {
                console.log(err)

            });

    }

    return (
        <div>
            <Container className="Home-container">
            <h5>All Orders</h5>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Order_no</th>
                            <th>Order_Date</th>
                            <th>Order_Price</th>
                            <th>customer_id</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            ProductData.map((oi) => {
                                return (
                                    <tr>
                                        <td>{oi.order_no}</td>
                                        <td>{oi.order_date}</td>
                                        <td>{oi.order_amount}</td>
                                        <td>{oi.customer_id}</td>
                                        <td><Button variant='danger' onClick={() => { deleteOrder(oi.order_no) }}>Delete</Button></td>
                                    </tr>

                                )
                            })
                        }
                    </tbody>
                </Table>

            </Container>


        </div>
    )
}

export default AllOrder