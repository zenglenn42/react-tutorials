import React, { useMemo, useState } from 'react'
import useFetch from './useFetch'

function computeLongestWord(arr) {
    if (!arr) {
        return []
    }

    console.log('computing longest word')

    let longestWord = ''

    const dataArray = JSON.parse(arr)
    dataArray.forEach((sentence) =>
        sentence.split(' ').forEach((word) => {
            if (word.length > longestWord.length) {
                longestWord = word
            }
        })
    )
    return longestWord
}

export const App = () => {
    const [count, setCount] = useState(0)
    const { data } = useFetch(
        'https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json'
    )

    const longestWord = useMemo(() => computeLongestWord(data), [data])

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>{longestWord}</div>
        </div>
    )
}
