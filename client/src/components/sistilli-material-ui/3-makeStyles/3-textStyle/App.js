import React from "react"
import { makeStyles, Button } from "@material-ui/core"

const useStyles = makeStyles({
    buttonStyle : {
        color: "red"
    },
    textStyle: {
        color: "green"
    }
})

export const App = () => {
    const classes = useStyles()

    return (
        <>
            <Button className={classes.buttonStyle}>Small buttton</Button>
            <h1 className={classes.textStyle}>this is text</h1>

            {/* I'm doing this instead of console logging shown in tutorial for better presentation. */}
            {/* Yes, I could use classes.scrollStyle idiom here but want output to match tutorial. */}
            <hr/>
            <div style={{overflowX: "scroll"}}>
                classes =
                <pre className={classes.preStyle}>
                    {JSON.stringify(classes, null, 2)}
                </pre>
            </div>
        </>
    )
}

