import React from 'react'
import CoffeeCard from './CoffeeCard'
import { Grid } from '@material-ui/core'
import coffeeMakerList from './constants'

const Content = () => {

    const getCoffeeMakerCard = (coffeeMakerObj) => {
        return (
            <Grid item xs={12} sm={6} lg={4}>
                <CoffeeCard {...coffeeMakerObj } />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
                {coffeeMakerList.map(coffeeMakerObj => getCoffeeMakerCard(coffeeMakerObj))}
        </Grid>
    )
}

export default Content

{/* <CoffeeCard
title="Hamilton Beach Flexbrew"
subtitle="$89.99"
avatarUrl="/assets/img/sistilli-uiux/hb-flexbrew-filter.png"
// avatarUrl="https://images-na.ssl-images-amazon.com/image/I/81mjh5Zu1L._AC_SL1500_.jpg"
description="An entirely adequate coffee maker."
imageUrl="/assets/img/sistilli-uiux/hb-flexbrew.png"
// imageUrl="https://images-na.ssl-images-amazon.com/images/I/818rz3CIaFL._AC_SL1500_.jpg"
/> */}
