import React from 'react';
import ProductForm from './ProductForm';
import ProductList from './ProductList';

const MainPage = () => {
    return (
        <div style={{ textAlign:'center'}}>
            <ProductForm />
            <hr style={{width:'100%', marginTop: '20px', border: '2px dashed teal'}}/>
            <ProductList />
        </div>
    );
};

export default MainPage;
