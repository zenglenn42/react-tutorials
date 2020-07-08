import React, { useState } from 'react'
import useFetch from './useFetch'

export const App = () => {
    const [number, setNumber] = useState(42)

    const url =  `http://numbersapi.com/${number}/trivia`
    const { data, loading, error } = useFetch(url)

    const onClick = () => { setNumber(c => {return (c + 1)}) }

    return (
        <>
            <div>
                {/* Getting some re-render flicker with logic below when retry is clicked w/o inet. */}
                {/* { loading 
                    ? "loading ..." 
                    : (error && error.code) ? `${error.msg} [error: ${error.code}]` 
                    : data } */}

                {/* This is flicker-free, but notice that loading is nolonger really needed. */}
                { (error && error.code) ? `😕 ${error.msg} [error: ${error.code}]` 
                    : data ?  data : loading && "loading ..." }
            </div><br/>

            { (error && error.code)
                ? <button onClick={onClick}>retry</button>
                : <button onClick={onClick}>next</button> }
        </>
    )
}
