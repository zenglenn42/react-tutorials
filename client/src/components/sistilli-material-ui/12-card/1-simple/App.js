import React from 'react'
import SimpleCard from './SimpleCard'
import SimpleCardTaxonomy from './SimpleCardTaxonomy'
import { Grid } from '@material-ui/core'

export const App = () => {
    return (
        <>
            <Grid container spacing={3} justify="space-around">
                <Grid item >
                    <SimpleCard variant="outlined" />
                </Grid>
                <Grid item>
                    <SimpleCardTaxonomy variant="outlined" />
                </Grid> 
            </Grid>
        </>
    )
}

export default App