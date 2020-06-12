import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

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

  const tutorialData = [
    {
      primaryText: "vschool.io",
      solutions: [
        {
          primaryText: "Joke List",
          secondaryText: "Props and Styling",
          contentKey: "jokeList"
        },
        {
          primaryText: "Todo List",
          secondaryText: "MVC and Forms",
          contentKey: "todo"
        },
        {
          primaryText: "Meme Generator",
          secondaryText: "Capstone Project",
          contentKey: "memeGenerator"
        }
      ]
    },
  ]

  const handleExpandClick = (e) => {
    const key = e.target.innerHTML
    const value = open[key]
    setOpen({...open, [key]: !value})
  };
  
  const handleSolutionClick = (e) => {
    const contentKey = e.currentTarget.getAttribute('data-key') || "splash"
    props.setMainContent(contentKey)
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Tutorial demos
        </ListSubheader>
      }
      className={classes.root}
    >
      { tutorialData.map((tutorial) => {
        const primaryText = tutorial.primaryText
        const listItem = (
          <ListItem button onClick={handleExpandClick}>
            <ListItemText primary={primaryText} />
            {open[primaryText] ? <ExpandLess /> : <ExpandMore />}
          </ListItem >
        )
        
        const collapseListItems = tutorial.solutions.map((solution) => {
          return (
          <ListItem button data-key={solution.contentKey} className={classes.nested} onClick={handleSolutionClick}>
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
