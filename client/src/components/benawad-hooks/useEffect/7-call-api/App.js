import React, { useState } from 'react'
import useFetch from './useFetch'
import { Button } from '@material-ui/core'

export const App = () => {
    const [ count, setCount] = useState(0)

    // Test inet failures.
    // url = "http://httpstat.us/500"
    const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`)

    return (
        <>
            <div>
                {!data ? loading && "loading ..." : data}
            </div><br/>
            <Button variant="contained" onClick={() => setCount(c => c + 1)}>fetch</Button>
        </>
    )
}
