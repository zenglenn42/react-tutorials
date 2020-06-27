import React from 'react'
import { Paper, Typography } from '@material-ui/core'

const PaperDemo = () => {
    return (
        <>
            <Paper>
                <Typography variant="h6">This is my typography</Typography>
            </Paper>
            <br/>
            <Typography variant="caption">Typography inside a {'<Paper>'} component.</Typography>
            <br/><br/>
            <hr/><br/>
            <Paper elevation={0}>
                <Typography variant="h6">This is my typography</Typography>
            </Paper>
            <Typography variant="caption">{'<Paper '}elevation={'{0}>'}</Typography>
            <br/><br/>
            <hr/><br/>
            <Paper elevation={14}>
                <Typography variant="h6" elevation={14}>This is my typography</Typography>
            </Paper>
            <br/>
            <Typography variant="caption">{'<Paper '}elevation={'{14}>'}</Typography>
        </>
    )
}

export default PaperDemo
