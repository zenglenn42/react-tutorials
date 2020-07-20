import React from 'react'
import ProductData from './api/ProductData.js'
import Product from './Product.js'

function AppProduct() {
    const ProductList = ProductData.map((product) => (
        <Product product={product} />
    ))

    return <div>{ProductList}</div>
}

export default AppProduct
