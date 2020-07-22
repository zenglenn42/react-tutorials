import React, { useState, useEffect } from 'react'
import useFetch from './useFetch'
import { Button } from '@material-ui/core'

export const App = () => {
    const [count, setCount] = useState(() =>
        JSON.parse(localStorage.getItem('count') || 0)
    )

    // Need this since I host from https and numbers api is http.
    const fixCors = 'https://cors-anywhere.herokuapp.com/'

    const { data, loading } = useFetch(
        `${fixCors}http://numbersapi.com/${count}/trivia`
    )

    useEffect(() => {
        localStorage.setItem('count', JSON.stringify(count))
    }, [count])

    return (
        <>
            <div>{!data ? loading && 'loading ...' : data}</div>
            <br />
            <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
                fetch
            </Button>
        </>
    )
}
