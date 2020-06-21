import React from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core'

const Content = () => {
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} lg={4}>
                <CoffeeCard
                    title="Hamilton Beach Flexbrew"
                    subtitle="$89.99"
                    avatarUrl="/assets/img/sistilli-uiux/hb-flexbrew-filter.png"
                    description="An entirely adequate coffee maker."
                    imageUrl="/assets/img/sistilli-uiux/hb-flexbrew.png" 
                />
            </Grid>
        </Grid>
    )
}

export default Content
