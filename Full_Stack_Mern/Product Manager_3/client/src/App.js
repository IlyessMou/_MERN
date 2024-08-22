import React from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import MainPage from './components/MainPage';
import ProductDetail from './components/ProductDetail'; 
import EditProduct from './components/EditProduct';

function App() {
    return (
            <div className="App" style={{ textAlign:'center', backgroundImage:'linear-gradient(to right, #43e97b 0%, #38f9d7 100%)', borderRadius:'40%', padding:'30px'
            }}>
                <h1>Product Manager</h1>
                <Routes>
                    <Route path="/" element={<Navigate to="/api/products" />} />
                    <Route path="/api/products" element={<MainPage />} />
                    <Route path="/api/products/:id" element={<ProductDetail />} />
                    <Route path="/api/update/:id" element={<EditProduct />} />
                </Routes>
            </div>

    );
}

export default App;
