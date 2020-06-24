import React from 'react'
import { makeStyles, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => {

})

export const App = () => {
    const classes = useStyles()

    return (
        <Button variant="contained" color="primary">
            Primary
        </Button>
    )
}
