import React from 'react'
import ProductData from './api/ProductData.js'
import Product from './Product.js'
import { v4 as getKey } from 'uuid'

function AppProduct() {
    const ProductList = ProductData.map((product) => (
        <Product product={product} key={getKey()} />
    ))

    return <div>{ProductList}</div>
}

export default AppProduct
