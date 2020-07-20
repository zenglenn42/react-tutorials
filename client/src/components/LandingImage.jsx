import React from 'react'

// https://exceptionshub.com/css3-flexbox-maintain-image-aspect-ratio.html

const LandingImage = (props) => {
    const { imageUrl } = props
    return (
        <div style={{ minWidth: 0 }}>
            <img
                alt=""
                src={imageUrl}
                style={{ maxWidth: '100%', height: 'auto' }}
            />
        </div>
    )
}

export default LandingImage
