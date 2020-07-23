import React from 'react'
import { Typography, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    colorPrimary: (props) => {
        const mainShade = 700
        const color = props.color
            ? typeof props.color === 'string'
                ? props.color
                : props.color[mainShade]
            : null
        return {
            color: color
        }
    }
})

const TypographyDemo = (props) => {
    const classes = useStyles(props)
    return (
        <Typography
            classes={{
                colorPrimary: classes.colorPrimary
            }}
            color="primary"
            variant="h1"
        >
            Hello world, i'm a primary h1.
        </Typography>
    )
}

export default TypographyDemo
