import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Box } from '@mui/material';

const Authors = () => {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/authors')
            .then(res => {
                setAuthors(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    const deleteAuthor = (id) => {
        axios.delete(`http://localhost:5000/authors/${id}`)
            .then(res => {
                setAuthors(authors.filter(author => author._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
        <Box sx={{ justifyContent: 'center', alignItems: 'center', height: '300px', width:'400px' }}>
        <Link to="/authors/new" style={{color:'mediumvioletred'}}>Add New Author</Link>
        <h3 style={{color:'goldenrod'}}>We have quotes by: </h3>
            <TableContainer component={Paper} sx={{ width: '90%' }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {authors.map((author) => (
                            <TableRow key={author._id}>
                                <TableCell>{author.name}</TableCell>
                                <TableCell>
                                    <Button variant="contained" color="primary" component={Link} to={`/authors/${author._id}/edit`}>
                                        Edit
                                    </Button>
                                    <Button variant="contained" color="secondary" onClick={() => deleteAuthor(author._id)} style={{ marginLeft: '10px' }}>
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
        </div>

    );
};

export default Authors;
