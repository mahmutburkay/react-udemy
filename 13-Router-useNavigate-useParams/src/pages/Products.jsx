import React from 'react'
import Product from '../components/Product'
import { products } from '../data/products';   //* datayı products olarak getirdik



function Products() {
    return (
        <div>
            {
                products && products.map((product) => ( //* product ları yakalayıp Product sınıfına props geç 
                    <Product key={product.id} product={product} />
                ))
            }
        </div>
    )
}

export default Products
