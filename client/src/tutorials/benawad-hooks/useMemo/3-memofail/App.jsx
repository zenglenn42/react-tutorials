import React, { useMemo, useState } from 'react'
import useFetch from './useFetch'

export const App = () => {
    const [count, setCount] = useState(0)
    const { data } = useFetch(
        'https://raw.githubusercontent.com/ajzbc/kanye.rest/quotes/quotes.json'
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
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

    const longestWord = useMemo(() => computeLongestWord(data), [
        data,
        computeLongestWord // Makes useMemo change on every render :-/
        // Should move fn to outer scope or wrap with useCallback().
    ])

    return (
        <div>
            <div>count: {count}</div>
            <button onClick={() => setCount(count + 1)}>increment</button>
            <div>{longestWord}</div>
        </div>
    )
}
