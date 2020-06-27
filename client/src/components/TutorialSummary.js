import React from "react"
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import { Grid } from "@material-ui/core";
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
    }
  }));

function TutorialSummary(props) {
    const classes = useStyles()
    const theme = useTheme()

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
            <Grid container direction="row">
                {props.avatars.map((avatar) => {
                    return (
                        <Grid style={{margin: theme.spacing(1)}} item>{avatar}</Grid>
                    )
                })}
            </Grid>
            <Typography gutterBottom> 
                Author: {props.author}<br/>
                Provider: {props.provider}<br/>
                Date: {props.date}<br/>
                Level: {props.level}<br/><hr/>
            </Typography>
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
