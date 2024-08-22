import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Box } from '@mui/material';
import Authors from './components/Authors';
import AddAuthor from './components/AddAuthor';
import EditAuthor from './components/EditAuthor';

function App() {
    return (
        <Box
            sx={{ display: 'flex',flexDirection: 'column',alignItems: 'center',justifyContent: 'center', height: '100vh',textAlign: 'center',padding: '20px',}} >
            <h1>Favorite Authors</h1>
            <Routes>
                <Route path="/" element={<Navigate to="/authors" />} />
                <Route path="/authors" element={<Authors />} />
                <Route path="/authors/new" element={<AddAuthor />} />
                <Route path="/authors/:id/edit" element={<EditAuthor />} />
            </Routes>
        </Box>
    );
}

export default App;
