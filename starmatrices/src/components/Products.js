import React from 'react';
import './Products.css'; // Import your CSS file
import pic from './images/jinna.png';
import serv from './images/serv.jpg';

function Products() {
    return (
        <>
            <h1 className='heading_prod'>Products</h1>
            <div className='container'>
                <div className='products'>
                    <div className='product-container'>
                        {/* Product 1 */}
                        <div className='product'>
                            <img src={serv} alt="Product 1" />
                            <h3 className='pro-head'>Services Hospital</h3>
                        </div>

                        {/* Product 2 */}
                        <div className='product'>
                            <img src={pic} alt="Product 2" />
                            <h3 className='pro-head'>Jinnah Hospital</h3>
                        </div>
                    </div>
                </div>

                <div className='products'>
                    <div className='product-container'>
                        {/* Product 1 */}
                        <div className='product'>
                            <img src={pic} alt="Product 1" />
                            <h3 className='pro-head'>Services Hospital</h3>
                        </div>

                       
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;
