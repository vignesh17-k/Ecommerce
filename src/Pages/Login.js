import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { changelog } from '../Reducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Spinner } from 'reactstrap';
import { Modal } from "react-bootstrap";
import { showlogin } from '../Reducer';
import { useSelector } from 'react-redux';
import { ImCross } from 'react-icons/im'



function Login() {

    const [islogin, setlogin] = useState(true);
    const [errormsg, seterrormsg] = useState("")
    const [name, setname] = useState("")
    const [password, setpassword] = useState("")
    const [mail, setmail] = useState("")
    const [loading, setloading] = useState(false)


    const dispatch = useDispatch()

    let navigate = useNavigate()
 
   const loginmodalstate = useSelector(state => state.State.showlogin)

    const handle = (e) => {
        e.preventDefault()
        if (name.length <= 0 || password.length <= 0 || mail.length <= 0) {
            seterrormsg("Enter all details")
        } else {

            const data = {
                email: mail,
                password: password
            }

            if (islogin) {
                setloading(true)
                axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDFzIi8NGRcOOJSDa0V5X6q1f3bovm0kks', data)
                    .then(res => {
                        // console.log(res)
                        if (res.status === 200) {
                            setloading(false)
                            dispatch(changelog(true))
                            dispatch(showlogin(false))
                            localStorage.setItem("username", name)
                            localStorage.setItem("tokens", res.data.idToken)
                            return navigate("/")
                        } else {
                            seterrormsg("Error at Login")
                        }
                    }).catch(err => {
                        setloading(false)
                        seterrormsg(err.response.data.error.message)
                    })

            } else {
                setloading(true)
                axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDFzIi8NGRcOOJSDa0V5X6q1f3bovm0kks', data)
                    .then(res => {
                        // console.log(res)
                        if (res.status === 200) {
                            setloading(false)
                            dispatch(changelog(true))
                            dispatch(showlogin(false))
                            localStorage.setItem("username", name)
                            return navigate("/")
                        } else {
                            seterrormsg("Error at Login")
                        }
                    }).catch(err => {
                        setloading(false)
                        seterrormsg(err.response.data.error.message)
                    })

            }



        }

    }


    const toggleSignup = () => {
        setlogin(!islogin);
    }

    




    return (
        <div>



            <Modal show={loginmodalstate} backdrop="static"  centered >

                <Modal.Body>
 


{islogin ? (
    <div className='login-card '>

        <div className='login-text-sec bg-dark' >

            <div className='mx-4 my-5 mt-5 '>

                <h5 className='text-light'>Login</h5>
                <h6 className='text-light' style={{ opacity: "0.7" }}>
                    Get access to your Orders, Wishlist and Recommendations
                </h6>

            </div>

            <div className='mb-5'>
                <img className='img-fluid img-logo' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' alt='logo'></img>
            </div>



        </div>

        <div className='bg-light '>

        <ImCross style={{ cursor: 'pointer',opacity: "0.6" }} onClick={() => dispatch(showlogin(false))} className='float-end my-2 mx-2 text-dark'  />
            <form onSubmit={handle}>

                <div className='mx-5 my-4 mt-5'>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" className='form-control input my-4' placeholder='Enter Username' ></input>
                    <input value={mail} onChange={(e) => setmail(e.target.value)} type="mail" className='form-control input my-4' placeholder='Enter Email'></input>
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className='form-control input' placeholder='Enter Password' ></input>
                </div>

                <div className='display-btn'>


                    <button type='submit' style={{ backgroundColor: "rgb(179, 122, 97)" }} className='btn login-btn text-light '>

                        {loading ? (<div className="d-flex text-dark justify-content-center ">
                            <Spinner style={{ width: '2rem', height: '2rem' }} />
                        </div>) :
                            (<h6 className='my-1' >Login</h6>)}

                    </button>

                    <p style={{ color: "rgb(179, 122, 97)" }} className=' text-center mx-4 my-2'>{errormsg}</p>

                    <span className='my-3 or'>OR</span>
                    <p className=' newtext mb-3' style={{ cursor: 'pointer', color: "rgb(179, 122, 97)" }} onClick={toggleSignup} > New Member? Create an account</p>
                </div>
            </form>

        </div>


    </div>

) : (
    <div className='login-card '>


        <div className=' login-text-sec bg-dark'>

            <div className='mx-4 my-5 '>
                <h5 className='text-light '>Looks like you're new here!</h5>
                <h6 className='text-light' style={{ opacity: "0.8", lineHeight: "1.1" }}>
                    Sign up with your mobile number/Username to get started
                </h6>

            </div>
            <div className='mb-5'>
                <img className='img-fluid img-logo' src='https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png' alt='logo'></img>
            </div>

        </div>

        <div className='bg-light'>
        <ImCross style={{ cursor: 'pointer',opacity: "0.6" }} onClick={() => dispatch(showlogin(false))} className='float-end my-2 mx-2 text-dark'  />
            <form onSubmit={handle}>

                <div className='mx-5 my-5'>
                    <input value={name} onChange={(e) => setname(e.target.value)} type="text" className='form-control input my-4' placeholder='Enter Username' ></input>
                    <input value={mail} onChange={(e) => setmail(e.target.value)} type="mail" className='form-control input my-4' placeholder='Enter Email'></input>
                    <input value={password} onChange={(e) => setpassword(e.target.value)} type="password" className='form-control input' placeholder='Enter Password' ></input>
                </div>

                <div className='display-btn'>

                    <button type='submit' style={{ backgroundColor: "rgb(179, 122, 97)" }} className='btn login-btn text-light'>
                        {loading ? (<div className="d-flex text-dark justify-content-center ">
                            <Spinner style={{ width: '2rem', height: '2rem' }} />
                        </div>) :
                            (<h6 className='my-1'>Sign In</h6>)}
                    </button>


                    <p style={{ color: "rgb(179, 122, 97)" }} className='text-center mx-4 my-2'>{errormsg}</p>
                    <span className='mb-2 or'>OR</span>
                    <button className='btn existing mb-5' onClick={toggleSignup}>Existing User? Log in</button>
                </div>
            </form>

        </div>


    </div>
)}

                  

                </Modal.Body>
            </Modal>



           
        </div>
    )
}

export default Login


