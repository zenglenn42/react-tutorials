import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import grey from '@material-ui/core/colors/grey'
import { CardHeader, CardMedia } from '@material-ui/core'

const lineHeight = 1.43
const lineHeight2x = lineHeight * 2

const useStyles = makeStyles({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: 435,
        minWidth: 290,
        maxWidth: 290
    },
    header: {
        backgroundColor: grey[200],
        minHeight: '92.05px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%' // 16:9
    },
    mediaLabel: {
        position: 'relative',
        paddingTop: `${lineHeight}rem`,
        marginBottom: `-${lineHeight2x}rem`
    },
    content: {
        backgroundColor: grey[300]
    },
    grow: {
        flex: 1,
        backgroundColor: grey[300]
    },
    actions: {
        backgroundColor: grey[400]
    }
})

export default function ComplexCarTaxonomy(props) {
    const classes = useStyles()

    return (
        <Card className={classes.root} {...props}>
            <CardHeader
                className={classes.header}
                titleTypographyProps={{ variant: 'body2', align: 'center' }}
                title="CardHeader"
            />
            <Typography
                className={classes.mediaLabel}
                variant="body2"
                align="center"
            >
                CardMedia
            </Typography>
            <CardMedia
                className={classes.media}
                image="/assets/img/sistilli-templates/gradient.png"
                title="CardMedia"
            />
            <CardContent className={classes.content}>
                <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    align="center"
                    variant="body2"
                >
                    CardContent
                </Typography>
            </CardContent>
            <div className={classes.grow} />
            <CardActions className={classes.actions}>
                <Button variant="contained" fullWidth>
                    <Typography
                        variant="body2"
                        style={{ textTransform: 'none' }}
                    >
                        CardActions
                    </Typography>
                </Button>
            </CardActions>
        </Card>
    )
}
