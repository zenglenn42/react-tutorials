import React from 'react'
import { Grid } from '@material-ui/core'
import { v4 as getKey } from 'uuid'
import CoffeeCard from './CoffeeCard'
import coffeeMakerList from './constants'

const Content = () => {
    const getCoffeeMakerCard = (coffeeMakerObj) => {
        return (
            <Grid item xs={12} sm={6} lg={4} key={getKey()}>
                <CoffeeCard {...coffeeMakerObj} />
            </Grid>
        )
    }

    return (
        <Grid container spacing={4}>
            {coffeeMakerList.map((coffeeMakerObj) =>
                getCoffeeMakerCard(coffeeMakerObj)
            )}
        </Grid>
    )
}

export default Content
