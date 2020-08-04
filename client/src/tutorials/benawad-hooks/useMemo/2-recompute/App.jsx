import React, { useState } from 'react'
import useFetch from './useFetch'

export const App = () => {
    const [count, setCount] = useState(0)
    const { data } = useFetch(
        'https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json'
    )

    function computeLongestWord(arr) {
        if (!arr) {
            return []
        }

        console.log('computing longest word')

        let longestWord = ''

        const dataArray = JSON.parse(data)
        dataArray.forEach((sentence) =>
            sentence.split(' ').forEach((word) => {
                if (word.length > longestWord.length) {
                    longestWord = word
                }
            })
        )
        return longestWord
    }

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>{computeLongestWord(data)}</div>
        </div>
    )
}
