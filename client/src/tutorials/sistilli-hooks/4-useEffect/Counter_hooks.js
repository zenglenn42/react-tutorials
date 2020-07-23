/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable camelcase */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    buttonSpacing: {
        marginBottom: '3rem'
    }
})

const Counter_hooks = () => {
    const [count, setCount] = useState(0)
    const classes = useStyles()

    const handleIncrementClick = () => {
        setCount(count + 1)
    }

    // Effectively 'componentDidMount' (w/ empty array)
    //
    // useEffect(() => {
    //     console.log("The count has been updated.")
    // }, [])

    // Effectively 'componentDidMount' & 'componentDidUpdate' if /any/
    // state variable changes (w/ no array)
    //
    // useEffect(() => {
    //     console.log("The count has been updated.")
    // })

    // Effective 'componentDidUnmount' when callback is added to return statement.
    //
    // useEffect(() => {
    //     return () => {console.log("This cleanup has been called.")}
    // }, [])

    // Effectively 'componentDidMount' and 'componentDidUpdate' if count changes

    useEffect(() => {
        console.log('The count has been updated.')
        return () => {
            console.log('This cleanup has been called.')
        }
    }, [count])

    return (
        <div>
            <h2>The count is: {count}</h2>
            <Button
                className={classes.buttonSpacing}
                onClick={handleIncrementClick}
                variant="contained"
            >
                Increment Count
            </Button>
        </div>
    )
}

export default Counter_hooks
