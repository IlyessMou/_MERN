import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';


const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();

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

    const handleDelete = () => {
        Axios.delete(`http://localhost:5000/api/products/${id}`)
            .then(() => {
                console.log("Product deleted");
                navigate('/api/products');
            })
            .catch(err => console.log(err));
    };
    const handleBack = () => {
        navigate('/api/products');
    };

    return (
        <div>
            {
                product ? (
                    <div>
                        <h2>{product.title}</h2>
                        <p>Price: ${product.price}</p>
                        <p>Description: {product.description}</p>
                        <button onClick={() => navigate(`/api/update/${product._id}`)} style={{width: '130px', borderRadius: '50%', boxShadow: '3px 5px black', marginTop: '10px', backgroundColor: 'green', marginRight: '10px'}}>Update</button>
                        <button onClick={handleDelete} style={{width: '130px', borderRadius: '50%', boxShadow: '3px 5px black', marginTop: '10px', backgroundColor: 'red' }}>
                        Delete
                        </button>
                        <br/>
                        <button onClick={handleBack} style={{width: '130px', borderRadius: '50%', boxShadow: '3px 5px black', marginTop: '10px', backgroundColor: 'gold' }}>
                        Home
                        </button>
                    </div>
                ) : (
                    <p>Loading...</p>
                )
            }
        </div>
    );
};

export default ProductDetail;
