import React, { useState, useRef, useLayoutEffect } from 'react'
import useFetch from './useFetch'
import { Button, Divider } from '@material-ui/core'

const Hello = () => {
    const [ count, setCount] = useState(0)

    // Need this since I host from https and numbers api is http.
    const fixCors = "https://cors-anywhere.herokuapp.com/"
    const { data, loading } = useFetch(`${fixCors}http://numbersapi.com/${count}/trivia`)

    const divRef = useRef()
    const [rect, setRect] = useState({})

    useLayoutEffect(() => {
        //console.log(divRef.current.getBoundingClientRect())
        setRect(divRef.current.getBoundingClientRect())
    }, [data])

    return (
        <div>
            <div style={{ display: "flex" }}>
                <div ref={divRef}> {!data ? loading && "loading ..." : data} </div><br/>
            </div>
            <Divider />
            <pre>
                Bounding rectangle for number fact:<br/>
                {JSON.stringify(rect, null, 2)}
            </pre>
            <Button variant="contained" onClick={() => setCount(c => c + 1)}>increment</Button>
        </div>
    )
}

export default Hello
