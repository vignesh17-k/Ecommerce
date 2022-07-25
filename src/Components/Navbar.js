import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import "./Navbar.css"
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changelog, showlogin } from '../Reducer';
import { useNavigate } from 'react-router-dom';

function Navbar() {


    const Cartdata = useSelector(state => state.State.Cart)

    const Logstate = useSelector(state => state.State.log)

    const dispatch = useDispatch()

    const navigate = useNavigate()

    if (Logstate) {
        var users = localStorage.getItem("username").toLocaleUpperCase()
    }
 

    const loggingout = () => {
        localStorage.removeItem("username")
        dispatch(changelog(false))
        return navigate("/")
    }


    return (
        <nav className='mx-5'>

            <div className='navbar container-fluid'>
                <img style={{ width: "10rem", height: "4rem" }} src='https://react-course-comfy-sloth-store.netlify.app/static/media/logo.221f6b13.svg' alt='logo'></img>

                <div >
                    <ul className="navbar-nav list">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-dark" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/About" className="nav-link text-dark" >About</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Products" className="nav-link text-dark" >Products</Link>
                        </li>
                    </ul>
                </div>


                <div className='buttons'> 

                  {Logstate ?  ( <h5 className='my-3' >Hi {users.toLocaleUpperCase()}</h5>) : ("")}  
                 

                    <Link to="/Cart" style={{ textDecoration: "none", color: "black" }} >
                        <div className='cart mx-4 cart position-relative'>

                            <h4 style={{ fontWeight: "400" }} className='my-2 mx-1'>

                                Cart

                            </h4>
                            <FaShoppingCart className='mx-2' style={{ fontSize: "20px" }} />


                            <span className="position-absolute top-1 start-100 translate-middle badge rounded-pill" style={{ backgroundColor: "rgb(179, 122, 97)" }} >
                                {Cartdata.length}
                                <span className="visually-hidden">unread messages</span>
                            </span>

                        </div>
                    </Link>



                    {Logstate ? (<button onClick={loggingout} className='btn px-3 py-2 btn-dark login'>Logout</button>
                    ) : (<button onClick={()=>dispatch(showlogin(true))}  className='btn px-3 py-2 btn-light login'>Login</button>)}

                </div>

            </div>

        </nav>



    )
}

export default Navbar