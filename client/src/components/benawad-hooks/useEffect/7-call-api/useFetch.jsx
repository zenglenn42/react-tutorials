import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const [state, setState] = useState({
        data: null, 
        loading: true, 
        error: {
            code: null, 
            msg: ""
        }
    })

    useEffect(
        (url) => {
            setState(state => ({data: state.data, loading: true, error: state.error}))
            fetch(url)
                .then(response => {
                    // NB: I've extended Ben's example to handle the case when
                    //     the internet might not be available or fails (gasp).
                    switch(response.status) {
                        case 200:  // success
                            setState(state => ({
                                data: response.text(), 
                                loading: false, 
                                error: {
                                    code: null, 
                                    msg: ""
                                }
                            }))
                            break;
                        default:
                            let msg = "Internet request failed."
                            switch (response.status) {
                                case 500:
                                    msg += " Are you sure you're connected?"
                                    break
                                case 502:
                                    msg += " Requests may be rate-limited by the API server."
                                    break
                                default:
                                    break
                            }
                            setState(state => ({
                                data: "",
                                loading: false, 
                                error: {
                                    code: response.status, 
                                    msg: msg
                                }
                            }))
                    }
                })
                .catch(() => {
                    console.log(`No internet connection. Unable to fetch from ${url}`)
                })
        }, [url, setState]
    )
    return state
}

export default useFetch