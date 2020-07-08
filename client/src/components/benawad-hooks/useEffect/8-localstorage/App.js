import React, { useState, useEffect } from 'react'
import useFetch from './useFetch'
import { Button } from '@material-ui/core'

export const App = () => {
    const [count, setCount] = useState(() => JSON.parse(localStorage.getItem("count")))
    const { data, loading } = useFetch(`http://countsapi.com/${count}/trivia`)

    useEffect(()=>{
        localStorage.setItem("count", JSON.stringify(count))
    }, [count])

    return (
        <>
            <div>
                {!data ? loading && "loading ..." : data}
            </div><br/>
            <Button variant="contained" onClick={() => setCount(c => c + 1)}>fetch</Button>
        </>
    )
}
