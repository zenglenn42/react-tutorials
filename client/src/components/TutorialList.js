import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import TutorialData from './api/TutorialData'

const tutorialData = TutorialData

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function TutorialList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({
    "vschool.io": false,
  });

  const handleExpandClick = (e) => {
    const key = e.target.innerHTML
    const value = open[key]
    setOpen({...open, [key]: !value})
  };
  
  const handleSolutionClick = (e) => {
    const demoKey = e.currentTarget.getAttribute('data-demokey') || "splash"
    const tutorialKey = e.currentTarget.getAttribute('data-tutorialkey') || "splash"

    const tutorial = tutorialData.filter((tutorial) => { return (tutorial.primaryText === tutorialKey) })[0]
    const solution = tutorial.solutions.filter((solution) => { return (solution.demoKey === demoKey) })[0]

    props.setMainContent(solution || {contentKey: "splash"})
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Select a tutorial ...
        </ListSubheader>
      }
      className={classes.root}
    >
      { tutorialData.map((tutorial) => {
        const primaryText = tutorial.primaryText
        const listItem = (
          <ListSubheader>
            <ListItem button onClick={handleExpandClick}>
              <ListItemText primary={primaryText} />
              {open[primaryText] ? <ExpandLess /> : <ExpandMore />}
            </ListItem >
          </ListSubheader>
        )
        
        const collapseListItems = tutorial.solutions.map((solution) => {
          return (
          <ListItem button data-tutorialkey={primaryText} data-demokey={solution.demoKey} className={classes.nested} onClick={handleSolutionClick}>
            <ListItemText
              primary={solution.primaryText}
              secondary={solution.secondaryText}
            />
          </ListItem>
          )
        })
        const collapseList = (
          <Collapse in={open[primaryText]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {collapseListItems}
            </List>
          </Collapse>
        )
        return <React.Fragment>{listItem} {collapseList}</React.Fragment>
      })}
    </List>
  );
}
