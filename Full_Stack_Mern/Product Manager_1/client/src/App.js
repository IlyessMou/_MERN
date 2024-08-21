import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import ProductForm from './components/ProductForm';

function App() {
    return (
            <div className="App">
                <h1>Product Manager</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/api/products" />} />
                    <Route path="/api/products" element={<ProductForm />} />
                </Routes>
            </div>

    );
}

export default App;
