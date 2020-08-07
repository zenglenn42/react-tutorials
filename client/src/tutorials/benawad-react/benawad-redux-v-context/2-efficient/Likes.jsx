import React, { useRef } from 'react'
import { useStoreState } from 'easy-peasy'

export const Likes = React.memo(() => {
    const likes = useStoreState((state) => state.data.likes)
    const renders = useRef(0)
    console.log('likes = ', likes)
    return (
        <div>
            <div>number of likes: {likes} </div>
            <div>Likes component renders: {renders.current++}</div>
        </div>
    )
})
