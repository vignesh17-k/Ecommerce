import React from 'react'
import { Card, CardBody, Col, Container, Row } from 'reactstrap'
import { GiCompass, GiDiamondHard } from 'react-icons/gi';
import { BiHistory } from 'react-icons/bi';
import { FaSearch} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Details } from '../Reducer';
import { useDispatch } from 'react-redux';


function Home() {

  const dispatch = useDispatch()

    let Products = [
        {
            image: "https://dl.airtable.com/.attachmentThumbnails/65708b701baa3a84883ad48301624b44/2de058af?ts=1658237765&userId=usrQMwWEPx18KgLcP&cs=3b2767f2978e3e77",
            price: "$599.99",
            title: "Entertainment Center",
            id:"recNZ0koOqEmilmoz"
        },
        {
            image: "https://dl.airtable.com/.attachmentThumbnails/1af97a4d3eb28563962d8e3520727ffc/1b9cc17f?ts=1658237765&userId=usrQMwWEPx18KgLcP&cs=29795e530d726701",
            price: "$399.99",
            title: "High-Back Bench",
            id:"recrfxv3EwpvJwvjq"
        },
        {
            image: "https://dl.airtable.com/.attachmentThumbnails/1e4a818f5184993e430420a152315b40/873c7094?ts=1658237765&userId=usrQMwWEPx18KgLcP&cs=7efad898fae4796f",
            price: "$319.99",
            title: "Modern Bookshelf",
            id:"recoAJYUCuEKxcPSr"
        }

    ]

    let features = [{
        logo: <GiCompass />,
        title: "Misson"
    },
    {
        logo: <GiDiamondHard />,
        title: "Vision"
    },
    {
        logo: <BiHistory />,
        title: "History"
    }
    ]


    

    return (

        <div>
            <Container >

                <Row >

                    <Col lg={6} md={12} style={{ marginTop: "8rem" }}>
                        <h1 className='title' style={{ width: "70%" }}>Design Your Comfort Zone</h1>
                        <p className='text '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at sed omnis corporis doloremque possimus velit! Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis alias?</p>
                        <Link to="/Products" style={{textDecoration:"none"}} className="text-light" > 
                        <button className='btn text-light py-2 px-4' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "17px" }}>
                        SHOP NOW
                          </button>
                           </Link>
                    </Col>

                    <Col lg={6} md={12}>

                        <div className='images my-5 mx-2 px-4'>
                            <div className='image1'>
                                <img style={{ height: "30rem", borderRadius: "5px" }} className='img-fluid' src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg' alt='img' ></img>
                            </div>


                            <div className='image2'>
                                <img className='img-fluid' style={{ width: "15rem", height: "10rem", borderRadius: "8px" }} src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg-2.78991864.jpeg' alt='imgs' ></img>
                            </div>
                        </div>

                    </Col>

                </Row>


            </Container>

            <Container className='my-5 col-12 bg-dark px-5 py-5 '>

                <div className='my-5'>
                    <h1 className='text-center text-light  featured '>Featured Products</h1>
                </div>

                <Row className='my-3' >
                    {Products.map((ele, index) => (
                        <Col lg={4} key={index}>
                            <div className='products'>

                                <div className='img-box'>
                                    <img src={ele.image} className="pro-images img-fluid " alt="images" ></img>
                                    <Link to="/ProductDetails" onClick={()=>dispatch(Details(ele.id))}>
                                    <div className='layer'>
                                    <FaSearch className='layer-logo px-2'/>
                                    </div>
                                    </Link>
                                </div>



                                <div className='products-title my-2'>
                                    <p className='text-light mx-3 pro-title'>{ele.title}</p>
                                    <p className='pro-price'>{ele.price}</p>
                                </div>

                            </div>

                        </Col>
                    ))}

                </Row>
                <div className='d-flex justify-content-center align-items-center'>
                <Link to="/Products" style={{textDecoration:"none"}} className="text-light" > 
                    <button className=' btn text-light py-2 px-4' style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "15px" }}>ALL PRODUCTS</button>
                    </Link>
                </div>


            </Container>


            <Container fluid className='py-5 px-5 mb-5' style={{ backgroundColor: "rgb(234,222,216)" }}>

                <div className='feature-head'>
                    <h1 style={{ color: "rgb(71, 53, 43)" }} className='my-5'>Custom Furniture Built Only For You</h1>
                    <p className='mx-5' style={{ color: "rgb(85, 69, 52)",fontSize:"15px" }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum debitis consectetur reprehenderit non aliquam voluptates dolore aut vero consequuntur.

                    </p>
                </div>





                <div className='display my-5'>
                    {features.map((ele, index) => (


                        <Card key={index} className="feature py-3" >

                            <CardBody>

                                <h1 className='text-center logo'>{ele.logo}</h1>

                                <h3 className='text-center my-3' style={{ color: "rgb(71, 53, 43)" }}>{ele.title}</h3>
                                <p className='text-center feature-text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, ea. Perferendis corrupti reiciendis nesciunt rerum velit autem unde numquam nis</p>

                            </CardBody>

                        </Card>



                    ))}
                </div>




            </Container>

            <Container className='inputbox'>

                <h2 className='mx-5 '>Join our newsletter and get 20% off</h2>

                <div className='box'>
                    <p className='mx-5 my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat sint unde quaerat ratione soluta veniam provident adipisci cumque eveniet tempore?</p>

                    <div className="input-group mb-3 ">
                        <input type="text" placeholder='Enter Email' name="name" className="form-control" />
                        <button className="input-group-text btn" style={{ backgroundColor: "rgb(179, 122, 97)", fontSize: "15px" }}>Subscribe</button>
                    </div>

                </div>

            </Container>



        </div>
    )
}

export default Home