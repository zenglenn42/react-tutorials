import React, { useState, useEffect } from 'react'
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    buttonSpacing: {
        marginBottom: "3rem"
    }
})

const Counter_hooks = () => {
    const classes = useStyles()
    
    const [count, setCount] = useState(0)
    const handleIncrementOnClick = () => {
        setCount(count + 1)
    }

    const [countTwo, setCountTwo] = useState(0)
    const handleIncrementCountTwoOnClick = () => {
        setCountTwo(countTwo + 1)
    }

    // Effectively 'componentDidMount' (w/ empty array)
    //
    // useEffect(() => {
    //     console.log("The count has been updated.")
    // }, [])

    // Effectively 'componentDidMount' & 'componentDidUpdate' if /any/ state variable changes (w/ no array)
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
        console.log("The count has been updated.")
        return () => {console.log("This cleanup has been called.")}
    }, [count])

    return (
        <div>
            <h2>
                Count #1: {count}
            </h2>
            <Button 
                className={classes.buttonSpacing} 
                onClick={handleIncrementOnClick} 
                variant="contained"
            >
                Increment Count
            </Button>

            <h2>
                Count #2: {countTwo}
            </h2>
            <Button 
                className={classes.buttonSpacing} 
                onClick={handleIncrementCountTwoOnClick} 
                variant="contained"
            >
                Increment Count Two
            </Button>
        </div>
    )
}

export default Counter_hooks