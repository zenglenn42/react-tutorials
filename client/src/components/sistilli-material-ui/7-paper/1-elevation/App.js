import React from 'react'
import { makeStyles } from '@material-ui/core'
import PaperDemo from './PaperDemo'

const useStyles = makeStyles((theme) => {
    return ({
        margin: {
            margin: theme.spacing(1),
        }
    })
})

export const App = () => {
    const classes = useStyles()

    return (
        <div className={classes.margin}>
            <PaperDemo />
        </div>
    )
}
