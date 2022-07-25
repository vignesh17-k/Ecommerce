import React from 'react'
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "./ProductCard.css"
import { useDispatch} from 'react-redux';
import { Details } from '../Reducer';

function ProductCard({ img, price, title,id}) {

 
    const dispatch = useDispatch()

    return (
        <div>

            <div className='products'>

                <div className='img-box'>
                  
                    <img className="product-images img-fluid " src={img} alt='products' ></img>
                    <Link to="/ProductDetails" onClick={()=>dispatch(Details(id))}>
                    <div className='layer'>
                        <FaSearch className='layer-logo px-2' />
                    </div>
                    </Link>
                </div>

                <div className='product-title mt-3'>

                    <p className='text-dark  mx-2 product-title'>{title.toUpperCase()}</p>

                    <p className='pro-price mx-5'>${price / 100}</p>


                </div>

            </div>

        </div>
    )
}

export default ProductCard