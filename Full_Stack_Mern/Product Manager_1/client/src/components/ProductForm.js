import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ProductForm = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [errors, setErrors] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("success")
        const tempObj = {
            title,
            price,
            description
        }
        axios.post("http://localhost:5000/api/products", tempObj)
            .then(res => {
                console.log("✅✅✅✅✅✅✅✅✅✅", res.data)
                navigate("/")
            })
            .catch(err => {
                console.log("❌❌❌❌", err.response.data.errors.title.message)
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })

    }

    return (
        <div>
            <div>
                {errors.map((err, i) => {
                    return <p key={i} style={{ color: "red" }}>{err}</p>
                })}
            </div>
        <form onSubmit={submitHandler}>
            <div>
            Title: 
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
            Price:
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
            Description
            <textarea value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button type="submit">Add Product</button>
        </form>
        </div>
    );
};

export default ProductForm;

