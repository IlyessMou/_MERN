import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:5000/api/products/${id}`)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/update/${id}`, {
            title,
            price,
            description
        })
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data);
                navigate(`/api/products/${id}`);
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };
    const handleBack = () => {
        navigate('/api/products');
    };

    return (
        <div>
            <div>
                {errors.map((err, i) => {
                    return <p key={i} style={{ color: "red" }}>{err}</p>
                })}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        Title:
                    </div>
                    <input
                        style={{width: '250px', height: '30px', margin: '10px', borderRadius: '10px', padding: '5px'}} type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div>
                    <div>
                        Price:
                    </div>
                    <input
                        style={{width: '250px', height: '30px',margin: '10px',borderRadius: '10px', padding: '5px'}} type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </div>
                <div>
                    <div>
                        Description
                    </div>
                    <textarea
                        style={{ borderRadius: '30%', width: '200px',padding: '40px', height: '100px', marginTop: '10px'}} value={description} onChange={(e) => setDescription(e.target.value)} />
                </div>
                <button type="submit" style={{width: '130px', borderRadius: '50%', boxShadow: '3px 5px black', marginTop: '10px', backgroundColor: 'greenyellow' }}>
                    Update
                </button>
                <button onClick={handleBack} style={{width: '130px', borderRadius: '50%', boxShadow: '3px 5px black', marginTop: '10px', backgroundColor: 'gold', marginLeft:'10px' }}>
                        Home
                </button>
            </form>
        </div>
    );
};

export default EditProduct;
