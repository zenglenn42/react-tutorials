import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
// import ExpandLess from '@material-ui/icons/ExpandLess';
// import ExpandMore from '@material-ui/icons/ExpandMore';
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

const findMatchingTutorial = (key) => {
  const tutorial = tutorialData.reduce((matchingTutorial, {playlist}) => {
    const plResult = playlist.reduce((result, tutorial) => {
      if (tutorial.primaryText === key) result = tutorial
      return result
    }, {})
    if (plResult.hasOwnProperty("summary")) matchingTutorial = plResult
    return matchingTutorial
  }, {})
  return tutorial
}

const findMatchingPlaylist = (key) => {
  const playlist = tutorialData.reduce((result, item) => {
    if (!item.summary) return result
    if (item.summary.primaryText === key) result = item
    return result
  }, {})
  return playlist
}

export default function TutorialList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState({});

  const handleExpandClick = (e) => {
    const playlistKey = e.currentTarget.getAttribute('data-playlistkey')
    const tutorialKey = e.currentTarget.getAttribute('data-tutorialkey') || "splash"
    const key = (playlistKey) ? playlistKey : tutorialKey
    const value = open[key] || false;
    setOpen({...open, [key]: !value})

    if (playlistKey) {
      const playlist = findMatchingPlaylist(key)
      props.setMainContent(playlist.summary)
    } else {
      const tutorial = findMatchingTutorial(key)
      if (tutorial.summary) {
        props.setMainContent(tutorial.summary)
      }
    }
  };
  
  const handleSolutionClick = (e) => {
    const tutorialKey = e.currentTarget.getAttribute('data-tutorialkey') || "splash"
    const demoKey = e.currentTarget.getAttribute('data-demokey') || "splash"

    const tutorial = findMatchingTutorial(tutorialKey)
    const solution = tutorial.snapshots.filter((solution) => { return (solution.demoKey === demoKey) })[0]

    props.setMainContent(solution || {demoKey: "splash"})
  }

  const getTutorialListItems = (tutorial) => {
    console.log("getTutorialListItems = ", tutorial)
    const primaryText = tutorial.primaryText
    const secondaryText = tutorial.summary.author
        
    const collapseListItems = tutorial.snapshots.map((solution) => {
      return (
      <ListItem button data-tutorialkey={primaryText} data-demokey={solution.demoKey} className={classes.nested} onClick={handleSolutionClick}>
        <ListItemText
          dense
          primary={solution.primaryText}
          secondary={solution.secondaryText}
        /> 
        {props.closeButton}
      </ListItem>
      )
    })
    // console.log("getTutorialListItems: collapseLI", collapseListItems)

    const collapseList = (
      <Collapse in={open[primaryText]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {collapseListItems}
        </List>
      </Collapse>
    )
    const listItems = (
      <ListSubheader disableSticky={true} id={tutorial.summary.provider}>
        <ListItem button data-tutorialkey={primaryText} onClick={handleExpandClick}>
          <ListItemText dense primary={primaryText} secondary={secondaryText}/>
          {/* {open[primaryText] ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem >
        {collapseList}
      </ListSubheader>
    )
    return listItems
  } 

  const getTutorialPlaylistItems = (tutorial) => {
    console.log("getTutorialPlaylistItems = ", tutorial)
    const primaryText = tutorial.summary.primaryText
    const secondaryText = tutorial.summary.author

    const collapseListItems = tutorial.playlist.map((pl) => {
      return (
        <ListSubheader disableSticky={true} id={pl.primaryText}>
          <ListItem button data-tutorialkey={pl.primaryText} data-demokey={pl.summary.demoKey} onClick={handleExpandClick}>
            <ListItemText dense primary={pl.primaryText} />
          {/* {open[primaryText] ? <ExpandLess /> : <ExpandMore />} */}
          </ListItem >
          <Collapse in={open[pl.primaryText]} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListSubheader disableSticky={true} id={pl.primaryText}>
              {
                pl.snapshots.map(
                  (solution) => {
                    return (
                      <ListItem button data-tutorialkey={pl.primaryText} data-demokey={solution.demoKey} className={classes.nested} onClick={handleSolutionClick}>
                        <ListItemText
                          dense
                          primary={solution.primaryText}
                          secondary={solution.secondaryText}
                          /> 
                        {props.closeButton}
                      </ListItem>
                    )
                  }
                )
              }
              </ListSubheader>
            </List>
          </Collapse>
        </ListSubheader>
      )
    })

    // console.log("getPlaylistItems: collapseLI", collapseListItems)

    const collapseList = (
      <Collapse in={open[primaryText]} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
            {collapseListItems}
        </List>
      </Collapse>
    )
    // const collapseList = tutorial.playlist.map((chapter) => getTutorialListItems(chapter))
    const listItems = (
      <ListSubheader disableSticky={true} id={tutorial.summary.provider}>
        <ListItem button data-playlistkey={primaryText} onClick={handleExpandClick}>
          <ListItemText dense primary={primaryText} secondary={secondaryText}/>
          {/* {open[primaryText] ? <ExpandLess /> : <ExpandMore />} */}
        </ListItem >
        {collapseList}
      </ListSubheader>
    )
    return listItems
  } 

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={<ListSubheader />}
      className={classes.root}
    >
      <ListSubheader  component="div" id="nested-list-subheader">
        Select a tutorial ...
      </ListSubheader>

      { 
        tutorialData.map((tutorial) => {
          let listItems = null
          if (tutorial.summary) {
            listItems = getTutorialPlaylistItems(tutorial)
          } else {
            listItems = tutorial.playlist.map((chapter) => getTutorialListItems(chapter))
          }
          return <React.Fragment>{listItems}</React.Fragment>
        })
      }

    </List>
  );
}
