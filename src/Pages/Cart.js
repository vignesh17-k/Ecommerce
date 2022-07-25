import React, { useEffect, useState } from 'react'
import { Card, CardBody, Container } from 'reactstrap'
import { Link } from 'react-router-dom'
import Cartitem from '../Components/Cartitem'
import { useSelector ,useDispatch} from 'react-redux'
import { AddtoCart } from '../Reducer'

function Cart() {


  const Cart = useSelector(state => state.State.Cart)
  
  const [total,settotal] = useState(0) 
 
  const dispatch = useDispatch()


  useEffect(()=>{
    let values = 0
     Cart.forEach(ele => {
            values += ele.price*ele.qty 
     })
     settotal(values)
  },[Cart,total])


  return (
    <div>

    {Cart.length === 0 ?


        (<div className="empty">
          <h1 style={{fontWeight:"600"}} className='text-center text-dark'>Your cart is empty</h1>
          <Link to="/Products" style={{textDecoration:"none"}} className="text-light" >
          <button className=' btn text-light ' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "17px" }}>FILL IT</button>
          </Link>
        </div>)

        : (

          <div>

            <Container fluid className='py-5 px-5' style={{ backgroundColor: "rgb(234,222,216)" }}>
              <h3 className='abt-title'>  <Link to="/" className='abt' style={{ color: "rgb(102, 77, 50)" }} >Home </Link> <span>/</span> <span>Cart</span> </h3>
            </Container>

            <Container className='col-12' style={{ marginTop: "60px" }}>
              <ul className='cart-list'>
                <li  style={{marginRight:"70px"}}>Item</li>
                <li className='mx-4'>Price</li>
                <li>Quantity</li>
                <li>Subtotal</li>
                <li></li>
              </ul>
              <hr></hr>



              {Cart.map(ele => (
                <Cartitem key={ele.id} id={ele.id} price={ele.price} qty={ele.qty} title={ele.name} img={ele.image} />
              ))}

              <hr></hr>

              <div className='shopping'>

                <div style={{ marginBottom: "170px" }}>
                <Link to="/Products" style={{textDecoration:"none"}} className="text-light" >
                  <button className=' btn text-light ' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "17px" }}>Continue Shopping</button>
                  </Link>
                </div>



                <div className='clear-cart'>
                  
                  <button className='btn btn-dark my-4' onClick={()=>dispatch(AddtoCart(-1,-1))} >Clear Shopping Cart</button>
                  <Card className='px-3'>
                    <CardBody >
                      <p className='mx-2 total'>Subtotal     :  <span className='mx-5'>{total/100}</span></p>
                      <p className='mx-2'>Shipping Fee :  <span className='mx-4'>$5.34</span></p>
                      <hr></hr>
                      <h4>Order Total : <span >${((total/100) + 5.35).toFixed(2)}</span>  </h4>
                    </CardBody>
                  </Card>

                </div>
              </div>


            </Container>
          </div>
        )

      }


    </div>
  )
}

export default Cart