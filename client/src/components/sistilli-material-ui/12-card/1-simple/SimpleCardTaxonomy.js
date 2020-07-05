import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import grey from '@material-ui/core/colors/grey'

const useStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: 212.7,
    minWidth: 275,
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    backgroundColor: grey[300]
  },
  grow: {
    flex: 1,
    backgroundColor: grey[300]
  },
  actions: {
    backgroundColor: grey[500]
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          align="center"
        >
          CardContent
        </Typography>
      </CardContent>
      <div className={classes.grow} />
      <CardActions className={classes.actions}>
        <Button variant="contained" size="small" fullWidth>
          <Typography variant="body2" style={{textTransform: "none"}}>CardActions</Typography>
        </Button>
      </CardActions>
    </Card>
  );
}
