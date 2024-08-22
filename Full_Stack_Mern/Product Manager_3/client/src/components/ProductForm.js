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
            <div>
            Title:
            </div>
            <input style={{width:'250px', height:'30px', margin:'10px',  borderRadius:'10px', padding:'5px' }} type="text" value={title} onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
            <div>
            Price:
            </div>
            <input style={{width:'250px', height:'30px', margin:'10px', borderRadius:'10px', padding:'5px'}} type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
            <div>
            Description
            </div>
            <textarea style={{borderRadius:'30%', width:'200px', padding:'40px', height:'100px',marginTop:'10px'}} value={description} onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <button type="submit" style={{width:'130px', borderRadius:'50%', boxShadow:'3px 5px black', marginTop:'10px', backgroundColor:'greenyellow'}}>Add Product</button>
        </form>
        </div>
    );
};

export default ProductForm;

