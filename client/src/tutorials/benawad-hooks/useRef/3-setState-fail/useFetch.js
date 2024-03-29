import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        setState((prevState) => ({ data: prevState.data, loading: true }))
        fetch(url)
            .then((x) => x.text())
            .then((y) => {
                // Intentially make call to API slower by 2 seconds.
                setTimeout(() => {
                    setState({ data: y, loading: false })
                }, 2000)
            })
            // eslint-disable-next-line no-unused-vars
            .catch((error) => {
                // Inet down or CORS failure?
                const errmsg = '😕 Internet request failed. Are you connected?'
                setState({ data: errmsg, loading: false })
            })
    }, [url])

    return state
}

export default useFetch
