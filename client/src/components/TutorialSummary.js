import React from "react"
import Typography from '@material-ui/core/Typography'
import { FaReact as ReactIcon } from 'react-icons/fa'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import DemobarColor from '@material-ui/core/colors/indigo';

const useStyles = makeStyles((theme) => ({
    Demobar: {
        backgroundColor: DemobarColor[200],
        paddingLeft: "0.5em", 
        paddingRight: "0px",
        marginBottom: "1em"
    },
    grow: {
      flex: '1 1 auto',
    },
  }));

function TutorialSummary(props) {
    const classes = useStyles();

    const summary = (
        <React.Fragment>
            <Toolbar className={classes.Demobar} variant="dense" >
                <Typography variant="h6" noWrap={true}>
                <ReactIcon/> {props.courseTitle}
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
                    <GitHubIcon />
                </IconButton>
                </Tooltip>
            </Toolbar>

            <Typography variant="h7" gutterBottom> 
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
                <List dense component="div" disablePadding>
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
        </React.Fragment>
    )
    return summary
}

export default TutorialSummary