import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import { grey } from '@material-ui/core/colors'
import { Divider } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: 435,
        minWidth: 290,
        maxWidth: 290
    },
    header: {
        minHeight: '92.05px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    avatar: {
        backgroundColor: grey[500]
    }
}))

export default function RecipeReviewCard(props) {
    const { imageUrl } = props
    const classes = useStyles()

    return (
        <Card className={classes.root} {...props}>
            <CardHeader className={classes.header} />
            <CardMedia
                className={classes.media}
                image={imageUrl}
                title="Paella dish"
            />
            <CardContent>
                <Typography component="p" variant="caption">
                    {'<CardMedia'}
                </Typography>
                <Typography component="p" variant="caption">
                    &nbsp;&nbsp;{'style={{height: 0, paddingTop: "56.25%"}}'}
                </Typography>
                <Typography component="p" variant="caption">
                    {'> // 16:9 aspect ratio'}
                </Typography>
                <Typography component="p" variant="caption">
                    &nbsp;&nbsp;{'image="/static/images/cards/paella.jpg"'}
                </Typography>
                <Typography component="p" variant="caption">
                    &nbsp;&nbsp;{'title="Paella dish"'}
                </Typography>
                <Typography component="p" variant="caption">
                    {'</CardMedia>'}
                </Typography>
            </CardContent>
            <Divider />
        </Card>
    )
}
