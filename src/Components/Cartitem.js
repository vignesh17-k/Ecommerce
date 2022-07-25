import React from 'react'
import { Container } from 'reactstrap'
import "./Cartitems.css"
import { FaTrash } from 'react-icons/fa';
import { Counterincrease } from '../Reducer';
import { Counterdecrease } from '../Reducer';
import { useDispatch } from 'react-redux';
import { Delcart } from '../Reducer';

function Cartitem({id,title,img,price,qty}) {


  const dispatch = useDispatch()


  return (
    <div>

      <Container>

        <div className='display-cart my-5'>

          <div className='cart-item'>
            <img className='img-fluid cart-img mx-2'  src={img} alt="images"></img>
            <p className='cart-title my-2'>{title.toUpperCase()}</p>
          </div>

          <div >
            <p className='cart-price my-2'>{price/100}</p>
          </div>

          <div className='mx-4 cart-quanty'>
                 <button className='btn mx-2' onClick={()=>dispatch(Counterdecrease(id))} >-</button>
                 <p className='cart-count my-2'>{qty}</p>
                 <button className='btn mx-2' onClick={()=>dispatch(Counterincrease(id))} >+</button>
          </div>

          <div>
            <p className='cart-sub my-2'>{(price * qty)/100}</p>
          </div>

           <button onClick={()=>dispatch(Delcart(id))} className='btn delbtn btn-danger'><FaTrash/></button>

        </div>


      </Container>

    </div>
  )
}

export default Cartitem