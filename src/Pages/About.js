import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

function About() {
    return (

        <div>



            <Container fluid className='py-5 px-5' style={{ backgroundColor: "rgb(234,222,216)" }}>
            <h3 className='abt-title'>  <Link to="/" className='abt' style={{ color: "rgb(102, 77, 50)",textDecoration:"none"}} >Home </Link> <span>/</span> <span>About</span> </h3>
            </Container>


            <Container>

                <Row className='mt-5'>
                    <Col lg={5} >
                        <img style={{ width: "35rem", height: "30rem" }} className="img-fluid my-5" src='https://react-course-comfy-sloth-store.netlify.app/static/media/hero-bcg.a876f19f.jpeg' alt='img'></img>
                    </Col>

                    <Col lg={7}>
                        <div className='my-5 mx-5'>
                            <h1 className='abt-head'>Our Story</h1>
                            <p className='abt-text my-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat accusantium sapiente tempora sed dolore esse deserunt eaque excepturi, delectus error accusamus vel eligendi, omnis beatae. Quisquam, dicta. Eos quod quisquam esse recusandae vitae neque dolore, obcaecati incidunt sequi blanditiis est exercitationem molestiae delectus saepe odio eligendi modi porro eaque in libero minus unde sapiente consectetur architecto. Ullam rerum, nemo iste ex, eaque perspiciatis nisi, eum totam velit saepe sed quos similique amet. Ex, voluptate accusamus nesciunt totam vitae esse iste.</p>
                        </div>


                    </Col>

                </Row>

            </Container>



        </div>
    )
}

export default About