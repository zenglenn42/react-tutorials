import React from 'react'
import { action, createStore, StoreProvider } from 'easy-peasy'
import App from './App'

const store = createStore({
    data: {
        likes: 0,
        numComments: 0,
        incrementLikes: action((state) => {
            state.likes++
        }),
        incrementNumComments: action((state) => {
            state.numComments++
        })
    }
})

export function AppWrapper() {
    return (
        <StoreProvider store={store}>
            <App />
        </StoreProvider>
    )
}

export default AppWrapper
