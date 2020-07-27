import { createMuiTheme } from '@material-ui/core'
import { useState, useLayoutEffect, useMemo } from 'react'

// Courtesy: https://medium.com/better-programming/how-to-use-media-queries-programmatically-in-react-4d6562c3bc97
const useBreakpoint = (queries) => {
    const [queryMatch, setQueryMatch] = useState(null)

    useLayoutEffect(() => {
        const mediaQueryLists = {}
        const keys = Object.keys(queries)

        // To check whether event listener is attached or not
        let isAttached = false

        const handleQueryListener = () => {
            const updatedMatches = keys.reduce((acc, media) => {
                acc[media] = !!(
                    mediaQueryLists[media] && mediaQueryLists[media].matches
                )
                return acc
            }, {})
            //Setting state to the updated matches
            // when document either starts or stops matching a query
            setQueryMatch(updatedMatches)
        }

        if (window && window.matchMedia) {
            const matches = {}
            keys.forEach((media) => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media] = window.matchMedia(queries[media])
                    matches[media] = mediaQueryLists[media].matches
                } else {
                    matches[media] = false
                }
            })
            //Setting state to initial matching queries
            setQueryMatch(matches)
            isAttached = true
            keys.forEach((media) => {
                if (typeof queries[media] === 'string') {
                    mediaQueryLists[media].addListener(handleQueryListener)
                }
            })
        }

        return () => {
            //If event listener is attached then remove it when deps change
            if (isAttached) {
                keys.forEach((media) => {
                    if (typeof queries[media] === 'string') {
                        mediaQueryLists[media].removeListener(
                            handleQueryListener
                        )
                    }
                })
            }
        }
    }, [queries])

    return queryMatch
}

const theme = createMuiTheme()

export const useIsDesktop = (bpUp) => {
    // Is current browser window width >= corresponding breakpoint
    // defined in the material-ui theme?
    //     bpUp = 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    //
    // Roughly speaking, anything at 'sm' or larger is considered desktop.

    const bpWidth = theme.breakpoints.values[bpUp]
    const queries = useMemo(
        () => ({
            [bpUp]: `(min-width: ${bpWidth}px)`
        }),
        [bpUp, bpWidth]
    )

    // Typical return value is an object of the form:
    //     {[bpUp]: true|false}.  For example, {sm: true}

    // (Sadly, attempts to destructure the result into a simple sane boolean
    // are met with arcane nullity and locked up browsers.)
    return useBreakpoint(queries)
}

export default useIsDesktop
