import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import { red } from '@material-ui/core/colors'
import MoreVertIcon from '@material-ui/icons/MoreVert'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 435,
        minWidth: 290,
        maxWidth: 290
    },
    avatar: {
        backgroundColor: red[500]
    }
}))

export default function RecipeReviewCard({ imageUrl, ...rest }) {
    const classes = useStyles()

    return (
        <Card className={classes.root} {...rest}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <Divider />
        </Card>
    )
}
