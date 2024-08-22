import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        Axios.get("http://localhost:5000/api/products")
            .then(res => {
                console.log(res.data);
                setProducts(res.data);
            })
            .catch(err => {
                console.error(err);
            });
    }, []);

    return (
        <div>
            <h2>Product List</h2>
            {
                products.length > 0 ? (
                    products.map(product => (
                        <div key={product._id}>
                            <Link to={`/api/products/${product._id}`}>
                                <h3>{product.title}</h3>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default ProductList;
