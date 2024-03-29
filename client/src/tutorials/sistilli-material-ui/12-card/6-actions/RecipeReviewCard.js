import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import { grey } from '@material-ui/core/colors'
import { Divider, Typography } from '@material-ui/core'
import Collapse from '@material-ui/core/Collapse'
import IconButton from '@material-ui/core/IconButton'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import clsx from 'clsx'

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
        paddingTop: '56.25%', // 16:9
        filter: 'grayscale(100%)'
    },
    avatar: {
        backgroundColor: grey[500]
    },
    actions: {
        backgroundColor: grey[300],
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 0,
        marginBottom: 0
    },
    grow: {
        flex: 1,
        // backgroundColor: grey[300]
        backgroundColor: 'white'
    },
    content: {
        minHeight: '112px'
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest
        })
    },
    expandOpen: {
        transform: 'rotate(180deg)'
    }
}))

export default function RecipeReviewCard(props) {
    const { imageUrl, ...rest } = props
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)

    const handleExpandClick = () => {
        setExpanded(!expanded)
    }

    return (
        <Card className={classes.root} {...rest}>
            <CardHeader className={classes.header} />
            <Divider />
            <CardMedia className={classes.media} image={imageUrl} />
            <Divider />
            <CardContent className={classes.content}>
                <Typography component="p" variant="caption">
                    {'<CardActions className={..}>'}
                </Typography>
                <Typography component="p" variant="caption" noWrap={true}>
                    &nbsp;&nbsp;{'<IconButton><FavoriteIcon/></IconButton>'}
                </Typography>
                <Typography component="p" variant="caption" noWrap={true}>
                    &nbsp;&nbsp;{'<IconButton><ShareIcon/></IconButton>'}
                </Typography>
                <Typography component="p" variant="caption" noWrap={true}>
                    &nbsp;&nbsp;
                    {'<IconButton ..><ExpandMoreIcon/></IconButton>'}
                </Typography>
                <Typography component="p" variant="caption" noWrap={true}>
                    {'</CardActions><Collapse ..>..</Collapse>'}
                </Typography>
            </CardContent>
            <Divider />
            <CardActions className={classes.actions} disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                    style={{ border: '3px white solid' }}
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Method:</Typography>
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add
                        saffron and set aside for 10 minutes.
                    </Typography>
                    <Typography paragraph>
                        Heat oil in a (14- to 16-inch) paella pan or a large,
                        deep skillet over medium-high heat. Add chicken, shrimp
                        and chorizo, and cook, stirring occasionally until
                        lightly browned, 6 to 8 minutes. Transfer shrimp to a
                        large plate and set aside, leaving chicken and chorizo
                        in the pan. Add pimentón, bay leaves, garlic, tomatoes,
                        onion, salt and pepper, and cook, stirring often until
                        thickened and fragrant, about 10 minutes. Add saffron
                        broth and remaining 4 1/2 cups chicken broth; bring to a
                        boil.
                    </Typography>
                    <Typography paragraph>
                        Add rice and stir very gently to distribute. Top with
                        artichokes and peppers, and cook without stirring, until
                        most of the liquid is absorbed, 15 to 18 minutes. Reduce
                        heat to medium-low, add reserved shrimp and mussels,
                        tucking them down into the rice, and cook again without
                        stirring, until mussels have opened and rice is just
                        tender, 5 to 7 minutes more. (Discard any mussels that
                        don’t open.)
                    </Typography>
                    <Typography>
                        Set aside off of the heat to let rest for 10 minutes,
                        and then serve.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    )
}
