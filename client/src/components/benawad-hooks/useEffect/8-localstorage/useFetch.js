import { useState, useEffect } from 'react'

const useFetch = url => {
    const [state, setState] = useState({
        data: null, 
        loading: true, 
    })

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url)
        .then(x => x.text())
        .then(y => {
            setState({data: y, loading: false})
        }).catch(error => {
            // Inet down or CORS failure?
            const errmsg = "😕 Internet request failed. Are you connected?"
            setState({data: errmsg, loading: false})
        })
    }, [url])
    return state
}

export default useFetch