import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey'
import { CardHeader, Avatar, IconButton, Tooltip, CardContent, Typography } from '@material-ui/core';
// import { red } from '@material-ui/core/colors';
import MoreVertIcon from '@material-ui/icons/MoreVert';

const lineHeight = 1.43
const lineHeight2x = lineHeight * 2

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 442,
    minWidth: 345,
    maxWidth: 345,
  },
  header: {
    backgroundColor: grey[200],
    minHeight: "72.0333px"
  },
  avatar: {
    backgroundColor: grey[500],
  },
});

export default function ComplexCarTaxonomy(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} {...props}>
      <CardHeader 
        className={classes.header}
        avatar={
          <Tooltip title="avatar={<Avatar/>}" enterDelay={300}>
            <Avatar aria-label="avatar" className={classes.avatar}>
              A
            </Avatar>
          </Tooltip>
        }
        // titleTypographyProps={{variant: 'body2', align: 'center'}}
        title="Title"
        subheader="subheader text"
        subheaderTypographyProps={{style: {fontStyle: "oblique"}}}
        action={
        <Tooltip title="action={<icon/>}" enterDelay={300}>
          <IconButton aria-label="action">
            <MoreVertIcon />
          </IconButton>
        </Tooltip>
        }
      />
      <CardContent>
        <Typography component="p" variant="caption" >{'<CardHeader>'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'avatar={<Avatar>A</Avatar>}'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'title="Title"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'subheader="subheader text"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'subheaderTypographyProps="{{style: {fontStyle: oblique}}}"'}</Typography>
        <Typography component="p" variant="caption" >&nbsp;&nbsp;{'action={<IconButton><MoreVertIcon/></IconButton>}'}</Typography>
        <Typography component="p" variant="caption" >{'</CardHeader>'}</Typography>
      </CardContent>
    </Card>
  );
}