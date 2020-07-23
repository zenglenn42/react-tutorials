/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import { useState, useEffect, useRef } from 'react'

const useFetch = (url) => {
    const isCurrent = useRef(true)
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        return () => {
            // called when component is going to unmount
            isCurrent.current = false
        }
    }, [])

    useEffect(() => {
        setState((prevState) => ({ data: prevState.data, loading: true }))
        fetch(url)
            .then((x) => x.text())
            .then((y) => {
                // Intentially make call to API slower by 2 seconds.
                setTimeout(() => {
                    if (isCurrent.current) {
                        setState({ data: y, loading: false })
                    }
                }, 2000)
            })
            .catch((error) => {
                // Inet down or CORS failure?
                const errmsg = '😕 Internet request failed. Are you connected?'
                if (isCurrent.current) {
                    setState({ data: errmsg, loading: false })
                }
            })
    }, [url])

    return state
}

export default useFetch
