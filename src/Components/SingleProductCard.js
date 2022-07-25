import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { Details } from '../Reducer'

function SingleProductCard({ title, img, price, des,id}) {

 const dispatch = useDispatch()

    return (


        <div>


            <Container className='my-5'>

                <Row>
            
                        <Col lg={4}>
                        <Link to="/ProductDetails" onClick={() => dispatch(Details(id))}>
                            <div>
                                <img className="product-single-images img-fluid" src={img} alt='images' ></img>
                            </div>
                            </Link>
                        </Col>

                        <Col lg={8} className="my-4">

                            <div >
                                <h4 style={{ fontWeight: "500" }}>{title.toUpperCase()}</h4>
                                <h6 className='pro-price'>${price / 100}</h6>
                                <p>{des.substring(0, 150)}...</p>
                                <Link to="/ProductDetails" onClick={() => dispatch(Details(id))}>
                                <button  style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "11px", color: "white" }} className='btn py-0 px-1 '>DETAILS</button>
                                </Link>
                            </div>
                        </Col>
            
                </Row>


            </Container>


        </div>
    )
}

export default SingleProductCard