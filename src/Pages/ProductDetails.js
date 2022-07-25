import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Container, Col, Row } from 'reactstrap'
import { AiTwotoneStar } from 'react-icons/ai';
import { AddtoCart } from '../Reducer';
import { ToastContainer, toast } from 'react-toastify';


function ProductDetails() {


    const [imgcount, setimgcount] = useState(0)

    const [active,setactive] = useState(null)

    const [count,setcount] = useState(1)
    
    const Single = useSelector(state => state.State.Singleproduct)

    const ShowImages = (index,id)=>{
         setimgcount(index)
         setactive(id)
    }

    const dispatch = useDispatch()

    const notify = (id)=>{
       dispatch(AddtoCart(count,id))
       return  toast('Added to Cart')
    }

     const decreasecount = ()=>{
          
          setcount(prev => {
               if(prev>1){
                   return prev-1
               }else{
                   return prev
               }
          })
     }
    
     const increasecount =() =>{
          setcount(prev=> (prev+1))
     }

    return (
        <div>
            <ToastContainer  position='top-left'  autoClose="1000"/>
            <Container fluid className='py-5 px-5' style={{ backgroundColor: "rgb(234,222,216)" }}>
                <h3 className='abt-title'>  <Link to="/" className='abt' style={{ color: "rgb(102, 77, 50)" }} >Home </Link> <span>/</span> <Link to="/Products" className='abt' style={{ color: "rgb(102, 77, 50)" }} >Products </Link>  /  {Single.map(ele => (<span style={{ fontSize: "33px" }} key={ele.id}>{ele.name.toUpperCase()}</span>))} </h3>
            </Container>

            <Container className='col-12 mt-5 detail-content' >

                {Single.map(ele => (
                    <Row key={ele.id} >

                        <Col lg={6} >
                            <Link to="/Products" >
                                <button className=' btn text-light py-2 px-4 my-4' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "15px" }}>BACK TO PRODUCTS</button>
                            </Link>


                            <div className='mb-4'>
                                <img className='img-fluid details-img' src={ele.images[imgcount].url} alt="images" ></img>

                            </div>

                            <div className='display-mini-image'>
                                {ele.images.map((element, index) => (
                   
                                    <img key={element.id} id={index} className = {active === element.id  ? 'img-fluid mini-img mini-img-active' :"img-fluid mini-img"}     onClick={()=>ShowImages(index,element.id)} src={element.url} alt="images" ></img>

                                ))}
                            </div>

                        </Col>

                        <Col lg={6} className="my-4">

                            <div className='mx-3 my-5'>

                                <h1 >{ele.name.toUpperCase()}</h1>

                                <div className='reviews'>
                                    <span className='rate px-1 my-2'>{ele.stars}<AiTwotoneStar className='text-dark' /></span>
                                    <p className='my-3 mx-3' style={{ fontSize: "18px" }}>{ele.reviews} customer reviews</p>
                                </div>

                                <p style={{ fontSize: "23px", fontWeight: "600" }} className='pro-price '>${ele.price / 100}</p>
                                <p className='detail-des'>{ele.description}</p>

                                <p> <span className='op'> Available </span>: <span className='mx-3'>In Stock</span> </p>
                                <p>  <span className='op'> SKU </span>: <span className='sku'>{ele.id}</span></p>
                                <p><span className='op'> Brand </span>:<span className='brand'>{ele.company}</span></p>
                                <hr></hr>
                                 
                                 <div>
                                     
                                     <p> <button onClick={decreasecount} className='btn minus'>-</button><span className='count mx-2 btn'>{count}</span><button className='btn plus' onClick={increasecount}>+</button></p>
                                   
                                 </div>
                      
                                 <button  onClick={()=>notify(ele.id)}  className=' btn text-light py-2 px-4' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "15px" }}>ADD TO CART</button>
                      
                            </div>

                        </Col>
                    </Row>


                ))}


            </Container>

        </div>
    )
}

export default ProductDetails