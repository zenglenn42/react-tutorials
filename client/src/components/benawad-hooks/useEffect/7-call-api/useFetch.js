import { useState, useEffect } from 'react'

const useFetch = url => {
    const [state, setState] = useState({
        data: null, 
        loading: true, 
    })

    const handleErrors = response => {
        if (!response.ok) {
            const errmsg = "😕 Dang. Internet request failed."
            setState({data: errmsg, loading: false})
            // throw Error(response.statusText)
        }
    }

    useEffect(() => {
        setState(state => ({data: state.data, loading: true}))
        fetch(url)
        .then(handleErrors)
        .then(x => x.text())
        .then(y => {
            setState({data: y, loading: false})
        })
        .catch(error => {
            // Tend to drop down here when inet is down or CORS failure.
            const errmsg = "😕 Internet request failed. Are you connected?"
            setState({data: errmsg, loading: false})
        })
    }, [url])
    return state
}

export default useFetch