import React from "react"
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid, Paper } from "@material-ui/core";
import { yellow } from "@material-ui/core/colors";

// import { FaReact as ReactIcon } from 'react-icons/fa'

const useStyles = makeStyles((theme) => ({
    Demobar: {
        backgroundColor: theme.palette.primary.light,
        paddingLeft: "0.5em", 
        paddingRight: "0px",
        marginBottom: "1em"
    },
    grow: {
      flex: '1 1 auto',
    },
    scrollableListX: {
        overflowX: "scroll"
    },
    postIt: {
        background: yellow[100],
        backgroundOrigin: "content-box",
        backgroundImage: "linear-gradient(rgba(0,0,0,.03) 50%, transparent 0)",
        backgroundSize: "auto 3em",
        lineHeight: "1.5",
        padding: ".5em",
        height: "100%"
    },
}));

function TutorialSummary(props) {
    const classes = useStyles()

    const summary = (
        <div className={classes.scrollableListX}>
            <Toolbar className={classes.Demobar} variant="dense" >
                <Typography variant="h6" noWrap={true}>
                {props.courseTitle}
                </Typography>
                <div className={classes.grow} />
                <Tooltip title={props.refLink.tipText} enterDelay={300}>
                <IconButton
                    component="a"
                    color="inherit"
                    href={props.refLink.href}
                    aria-label={props.refLink.tipText}
                    target="_blank"
                    >
                    {props.refLink.icon}
                </IconButton>
                </Tooltip>
                <Tooltip title={props.codeLink.tipText} enterDelay={300}>
                <IconButton
                    component="a"
                    color="inherit"
                    href={props.codeLink.href}
                    aria-label={props.codeLink.tipText}
                    target="_blank"
                    >
                    {props.codeLink.icon}
                </IconButton>
                </Tooltip>
            </Toolbar>
            <Grid container direction="row" alignContent="space-between">
                <Grid container item direction="column" xs={12} sm={6} alignContent="center">
                    {props.avatars.map((avatar, i) => {
                        const authorNames = props.author.split(",")
                        return (
                            <Grid container item direction="column" alignItems="center">
                                <Grid item>
                                    {avatar}
                                </Grid>
                                <Grid item>
                                    <Typography variant="caption" wrap>{authorNames[i]}</Typography>
                                </Grid>
                            </Grid>
                            )
                        })}
                </Grid>
                <Grid container item direction="column" xs={12} sm={6}>
                    <Paper className={classes.postIt} square elevation={0}>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <Typography noWrap>
                                Sponsor:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography noWrap>
                                {props.provider}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <Typography noWrap>
                                Date:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography noWrap>
                                {props.date}
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row">
                        <Grid item xs={4}>
                            <Typography noWrap>
                                Level:
                            </Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography noWrap>
                                {props.level}
                            </Typography>
                        </Grid>
                    </Grid>
                    </Paper>
                </Grid>
            </Grid>
            <hr style={{color: "lightgray", margin: "1em 0"}}/>
            <Typography paragraph>
                {props.descText}
            </Typography>
            <Typography paragraph>
                Features:
                <List dense="true" component="div" disablePadding>
                    {props.features.map((feature) => {
                        return (
                            <ListItem>
                                <ListItemText 
                                    primary={"• " + feature.bulletPoint}
                                    secondary={feature.bulletText} />
                            </ListItem>
                        )
                    })}
                </List>
            </Typography>
        </div>
    )
    return summary
}

export default TutorialSummary
