import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const AddAuthor = () => {
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/authors/new', { name })
            .then(() => navigate('/authors'))
            .catch(err => {
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key in errorResponse) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    return <AuthorForm submitHandler={submitHandler} name={name} setName={setName} errors={errors} />;
};

export default AddAuthor;
