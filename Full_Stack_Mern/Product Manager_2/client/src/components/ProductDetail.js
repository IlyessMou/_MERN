import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams } from 'react-router-dom';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        Axios.get(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                console.log(res.data);
                setProduct(res.data);
                console.log("success");
                console.log("product fetched")
            })
            .catch(err => {
                console.error(err);
            });
    }, [id]);

    return (
        <div>
            {
                product ? (
                    <div>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default ProductDetail;
