import React, { useState } from 'react'
import useFetch from './useFetch'
import { Button, Divider } from '@material-ui/core'

const Hello = () => {
    const [count, setCount] = useState(0)

    // Need this since I host from https and numbers api is http.
    const fixCors = 'https://cors-anywhere.herokuapp.com/'
    const { data, loading } = useFetch(
        `${fixCors}http://numbersapi.com/${count}/trivia`,
    )

    return (
        <div>
            <Divider />
            <div>{!data ? loading && 'loading ...' : data}</div>
            <br />
            <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
                1. fetch
            </Button>
            <br />
            <br />
        </div>
    )
}

export default Hello
