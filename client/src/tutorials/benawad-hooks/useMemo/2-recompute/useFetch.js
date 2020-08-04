import { useEffect, useState, useRef } from 'react'

export const useFetch = (url) => {
    const isCurrent = useRef(true)
    const [state, setState] = useState({
        data: null,
        loading: true
    })

    useEffect(() => {
        return () => {
            // called when the component is going to unmount
            isCurrent.current = false
        }
    }, [])

    useEffect(() => {
        setState((prevState) => ({ data: prevState.data, loading: true }))
        fetch(url)
            .then((x) => x.text())
            .then((y) => {
                if (isCurrent.current) {
                    setState({ data: y, loading: false })
                }
            })
            .catch((error) => {
                // Inet down or CORS failure?
                const errmsg =
                    '["😕Internet_request_failed...are_you_connected?"]'
                if (isCurrent.current) {
                    setState({ data: errmsg, loading: false })
                }
            })
    }, [url])

    return state
}

export default useFetch
