import React from 'react'

function Product({ product }) {
    return (
        <div className="productItem" key={product.id}>
            <p>Name: {product.name}</p>
            <p>
                Price:{' '}
                {product.price.toLocaleString('en-US', {
                    style: 'currency',
                    currency: 'USD'
                })}
            </p>
            <p>Description: {product.desc}</p>
            <hr />
        </div>
    )
}

export default Product
