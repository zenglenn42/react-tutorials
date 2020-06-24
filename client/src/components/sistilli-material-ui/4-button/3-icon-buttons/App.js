import React from 'react'
import { makeStyles, IconButton, Typography, Button } from '@material-ui/core'
import { Delete, AlarmAdd, AddShoppingCart } from '@material-ui/icons'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
    root: {
        "& > *": {
            margin: theme.spacing(1)
        }
    },
    rowCentered: {
        display: "flex",
        alignItems: "center",
    },
    icon: {
        margin: theme.spacing(3)
    },
    cssRootOverride: {
        border: "3px solid black"
    },
    notAllowed: {
        cursor: "not-allowed",
        pointerEvents: "auto"
    }
}))

export const App = () => {
    const classes = useStyles()

    return (
        <>
            <div>
                <Typography>
                    Use cases: app bars and toggle buttons
                </Typography>
            </div>
            <hr/>
            <div className={classes.root}>
                <IconButton aria-label="delete">
                    <Delete />
                </IconButton>
                <IconButton aria-label="delete" disabled color="primary">
                    <Delete />
                </IconButton>
                <IconButton aria-label="add an alarm" color="secondary">
                    <AlarmAdd />
                </IconButton>
                <IconButton aria-label="add to shopping cart" color="primary">
                    <AddShoppingCart />
                </IconButton>
            </div>
            <Typography>Icon versus IconButton</Typography>
            <hr/>
            <div className={clsx(classes.rowCentered)}>
                <Delete className={classes.icon} />
                <IconButton aria-label="delete"><Delete /></IconButton>
            </div>
            <Typography>Display 'not-allowed' cursor on hover or click.</Typography>
            <hr/>
            <div className={classes.root}>
                <span style={{cursor: "not-allowed"}}>
                    <IconButton aria-label="delete" disabled><Delete /></IconButton>
                </span>
                <Button disabled>Disabled</Button>
            </div>
            <hr />
            <Typography paragraph={true}>
            CSS Overrides<br/>
            
            Here we add a border by overriding the Material-UI .MuiButton-root global css class with the 'root' rule name and a 'classes' prop.
            Use case: Can be very granular with targetting overrides.
            </Typography>
            {/* Here, I'm essentially giving an IconButton a border without variant="outlined" */}
            <div className={classes.root}>
                <IconButton classes={{
                        root: classes.cssRootOverride
                    }} 
                    aria-label="delete" 
                >
                    <Delete />
                </IconButton>
            </div>
        </>
    )
}
