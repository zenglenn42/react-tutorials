import React from 'react'
import { Paper, Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    black: {
        color: 'black'
    },
    reallyRounded: {
        borderRadius: '1rem'
    }
})

const PaperDemo = () => {
    const classes = useStyles()

    return (
        <>
            <Paper>
                <Typography variant="h6">This is my typography</Typography>
            </Paper>
            <br />
            <Typography className={classes.black} variant="caption">
                Paper defaults to rounded.
            </Typography>
            <br />
            <br />
            <hr />
            <br />
            <Paper square>
                <Typography variant="h6">This is my typography</Typography>
            </Paper>
            <br />
            <Typography className={classes.black} variant="caption">
                {'<Paper square >'}
            </Typography>
            <br />
            <br />
            <hr />
            <br />
            <Paper classes={{ rounded: classes.reallyRounded }}>
                <Typography variant="h6">This is really rounded</Typography>
            </Paper>
            <br />
            <Typography className={classes.black} variant="caption">
                Overriding .MuiPaper-rounded css class.
            </Typography>
        </>
    )
}

export default PaperDemo
