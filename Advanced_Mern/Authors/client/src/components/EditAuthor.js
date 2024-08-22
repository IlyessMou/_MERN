import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import AuthorForm from './AuthorForm';

const EditAuthor = () => {
    const { id } = useParams();
    const [name, setName] = useState('');
    const [errors, setErrors] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:5000/authors/${id}`)
            .then(res => setName(res.data.name))
            .catch(err => console.log(err));
    }, [id]);

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/authors/${id}/edit`, { name })
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

export default EditAuthor;
