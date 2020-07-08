import React, { useState } from 'react'
import useFetch from './useFetch'
import { useEffect } from 'react'

export const App = () => {
    const [number, setNumber] = useState(() => JSON.parse(localStorage.getItem("number")))

    const url =  `http://numbersapi.com/${number}/trivia`
    const { data, loading, error } = useFetch(url)

    useEffect(()=>{
        localStorage.setItem("number", JSON.stringify(number))
    }, [number])

    const onClick = () => { setNumber(c => {return (c + 1)}) }
    return (
        <>
            <div>
                { (error && error.code) ? `😕 ${error.msg} [error: ${error.code}]` 
                    : data ?  data : loading && "loading ..." }
            </div><br/>

            { (error && error.code)
                ? <button onClick={onClick}>retry</button>
                : <button onClick={onClick}>next</button> }
        </>
    )
}
