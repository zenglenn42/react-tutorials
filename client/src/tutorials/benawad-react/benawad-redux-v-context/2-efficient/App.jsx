import React from 'react'
import { useStoreState, useStoreActions } from 'easy-peasy'
import './styles.css'
import { Likes } from './Likes'
import { LikesAndComments } from './LikesAndComments'

export const App = () => {
    const data = useStoreState((state) => state.data)
    const { incrementLikes, incrementNumComments } = useStoreActions(
        (actions) => actions.data
    )

    return (
        <div>
            <button onClick={incrementLikes}>increment likes</button>
            <button onClick={incrementNumComments}>
                increment numComments
            </button>
            <pre>{JSON.stringify(data, null, 2)}</pre>
            <LikesAndComments />
            <br />
            <Likes />
        </div>
    )
}

export default App
