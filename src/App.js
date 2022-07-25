import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Spinner } from 'reactstrap';
import 'react-toastify/dist/ReactToastify.css';
import Login from './Pages/Login';

const Navbar = React.lazy(() => import('./Components/Navbar'))
const Home = React.lazy(() => import('./Pages/Home'))
const About = React.lazy(() => import('./Pages/About'))
const Footer = React.lazy(() => import('./Components/Footer'))
const Products = React.lazy(()=>import("./Pages/Products"))
const ProductDetails = React.lazy(()=>import("./Pages/ProductDetails"))
const Cart = React.lazy(()=>import("./Pages/Cart"))

function App() {


  return (
 


    <div>
      <Login/>
    
    <Navbar />

      <Suspense fallback={
        <div className="d-flex text-dark justify-content-center ">
          <Spinner style={{ width: '3rem', height: '3rem' }} />
        </div>}>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Products'  element={<Products/>} />
          <Route path='/ProductDetails' element={<ProductDetails/>} />
          <Route path='/Cart' element={<Cart/>}  />
        </Routes>


      </Suspense>


      <Footer />



    </div>


  );
}

export default App;
