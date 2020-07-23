import React from 'react'
import { Grid } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

export const App = () => {
    return (
        <Grid container>
            <Grid item>
                <AcUnitIcon color="primary" />
            </Grid>
            <Grid item>
                <AcUnitIcon color="secondary" />
            </Grid>
        </Grid>
    )
}
