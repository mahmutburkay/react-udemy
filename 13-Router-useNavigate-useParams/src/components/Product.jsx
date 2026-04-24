import React from 'react'
import { useNavigate } from 'react-router-dom';

function Product({ product }) {

    const { id, name, price } = product;  // object distructing yaparak aç

    const navigate = useNavigate();



    return (
        <div style={{ marginBottom: '40px ', backgroundColor: "lightgrey" }}>

            <div>Ürün Detayı</div>

            <h3>İsim : {name}</h3>
            <h3>Fiyat: {price}</h3>

            <button onClick={() => navigate("/product-details/" + id)}> Ürün detayına git </button>

        </div>
    )
}

export default Product
