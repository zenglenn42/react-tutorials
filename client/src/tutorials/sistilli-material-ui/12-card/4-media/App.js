import React from 'react'
import RecipeReviewCard from './RecipeReviewCard'
import MediaTaxonomy from './MediaTaxonomy'
import { Grid } from '@material-ui/core'

// const imageUrl="/static/images/cards/paella.jpg"
const imageUrl = '/assets/img/sistilli-materialui/paella.jpg'

export const App = () => {
    return (
        <>
            <Grid
                container
                spacing={3}
                justify="space-around"
                style={{ padding: '5px 0' }}
            >
                <Grid item>
                    <RecipeReviewCard imageUrl={imageUrl} elevation={3} />
                </Grid>
                <Grid item>
                    <MediaTaxonomy variant="outlined" />
                </Grid>
            </Grid>
        </>
    )
}

export default App
