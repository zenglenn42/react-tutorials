import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { CardHeader, CardMedia, Divider } from '@material-ui/core'
import grey from '@material-ui/core/colors/grey'

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
        backgroundColor: 'white',
        minHeight: '92.05px'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        filter: 'grayscale(100%)'
    },
    mediaLabel: {
        position: 'relative',
        paddingTop: `${lineHeight}rem`,
        marginBottom: `-${lineHeight2x}rem`
    },
    content: {
        backgroundColor: 'white',
        paddingTop: '8px',
        paddingBottom: 0,
        minHeight: '136px'
    },
    grow: {
        flex: 1,
        backgroundColor: grey[400]
    },
    actions: {
        backgroundColor: grey[400],
        marginTop: '4px'
    }
})

export default function ComplexCarTaxonomy(props) {
    const classes = useStyles()

    return (
        <Card className={classes.root} {...props}>
            <CardHeader
                className={classes.header}
                titleTypographyProps={{
                    variant: 'body2',
                    align: 'center',
                    color: 'textSecondary'
                }}
                title="CardHeader"
            />
            <Divider />
            <Typography
                className={classes.mediaLabel}
                color="textSecondary"
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
            <Divider />
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
                <Button variant="contained" color="primary" fullWidth>
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
