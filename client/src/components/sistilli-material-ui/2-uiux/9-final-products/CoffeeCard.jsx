import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import ShareIcon from '@material-ui/icons/Share'
import { Avatar, IconButton, CardMedia } from '@material-ui/core'

const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
    },
    growDiv: {
        flex: '1 1 auto',
    },
}))

const CoffeeCard = (props) => {
    const { avatarUrl, title, subtitle, description, imageUrl } = props
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={avatarUrl} />}
                action={
                    <IconButton aria-label="settings">
                        <ShareIcon />
                    </IconButton>
                }
                title={title}
                subheader={subtitle}
            />
            <CardMedia
                style={{ height: '0', paddingTop: '56.25%' }}
                image={imageUrl}
            />
            <CardContent>
                <Typography variant="body2" component="p">
                    {description}
                </Typography>
            </CardContent>
            <div className={classes.growDiv} />
            <CardActions>
                <Button size="small">BUY NOW</Button>
                <Button size="small">OFFER</Button>
            </CardActions>
        </Card>
    )
}

export default CoffeeCard
