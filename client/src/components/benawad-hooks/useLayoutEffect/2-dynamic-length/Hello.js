import React, { useState, useRef, useLayoutEffect } from 'react'
import { Button, Divider } from '@material-ui/core'
import useFetch from './useFetch'

// Need this to address CORS deployment issue since I host from https
// but numbers API in example is http.
const https = 'https://cors-anywhere.herokuapp.com/http'

const Hello = () => {
    const [count, setCount] = useState(0)

    const { data, loading } = useFetch(
        `${https}://numbersapi.com/${count}/trivia`,
    )

    const divRef = useRef()
    const [rect, setRect] = useState({})

    useLayoutEffect(() => {
        //console.log(divRef.current.getBoundingClientRect())
        setRect(divRef.current.getBoundingClientRect())
    }, [data])

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <div ref={divRef} style={{ border: '1px solid grey' }}>
                    {!data ? loading && 'loading ...' : data}
                </div>
            </div>
            <br />
            <Divider />
            <pre>
                Bounding rectangle for number fact:
                <br />
                {JSON.stringify(rect, null, 2)}
            </pre>
            <Button variant="contained" onClick={() => setCount((c) => c + 1)}>
                increment
            </Button>
        </div>
    )
}

export default Hello
