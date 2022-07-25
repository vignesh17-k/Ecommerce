import React from 'react'
import Notfound from "../assets/notfound.svg"


function NotFound() {
  return (
    <div>
 
    <img src={Notfound}  alt="img" className="img-fluid notfound p-5" ></img> 
     <h4 className='text-center text-dark'>Sorry, no products matched your search.</h4>     
    </div>
  )
}

export default NotFound