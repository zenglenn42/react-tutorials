import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import AcUnitIcon from '@material-ui/icons/AcUnit'

const useStyles = makeStyles({
    grid: {
        border: '1px solid darkgrey'
    },
    cell: {
        backgroundColor: 'lightgray'
    }
})

export const App = () => {
    const classes = useStyles()
    return (
        <>
            <Typography variant="caption">
                {'<Grid container justify="center">'}
            </Typography>
            <br />
            <Typography variant="caption">
                {' <Grid item xs={12}>❄︎</Grid>'}
            </Typography>
            <br />
            <Typography variant="caption">{' <Grid item>❄︎</Grid>'}</Typography>
            <br />
            <Typography variant="caption">{'</Grid>'}</Typography>
            <Grid className={classes.grid} container justify="center">
                <Grid className={classes.cell} item xs={12}>
                    <AcUnitIcon color="primary" />
                </Grid>
                <Grid className={classes.cell} item>
                    <AcUnitIcon color="secondary" />
                </Grid>
            </Grid>
            <Typography variant="caption">
                Blue snowflake floats left within first grid cell which happens
                to take up whole row and is itself centered, technically
                speaking.
            </Typography>
            <br />
            <Typography variant="caption">
                So 'justify' does /not/ affect the centering of the stuff
                /inside/ a given grid item.
            </Typography>
            <br />
            <Typography variant="caption">
                It only affects the positioning of the gray stuff on a given
                row.
            </Typography>
            <br />
            <br />
            <br />
            <hr />
            <br />

            <Typography variant="caption">
                {'<Grid container justify="center">'}
            </Typography>
            <br />
            <Typography variant="caption">{' <Grid item>❄︎</Grid>'}</Typography>
            <br />
            <Typography variant="caption">{'</Grid>'}</Typography>

            <Grid className={classes.grid} container justify="center">
                <Grid className={classes.cell} item>
                    <AcUnitIcon color="primary" />
                </Grid>
            </Grid>
            <br />
            <br />

            <Typography variant="caption">
                {'<Grid container justify="center">'}
            </Typography>
            <br />
            <Typography variant="caption">
                {' <Grid item xs={3}>❄︎</Grid>'}
            </Typography>
            <br />
            <Typography variant="caption">{'</Grid>'}</Typography>
            <Grid className={classes.grid} container justify="center">
                <Grid className={classes.cell} item xs={3}>
                    <AcUnitIcon color="primary" />
                </Grid>
            </Grid>
            <br />
            <br />

            <Typography variant="caption">
                {'<Grid container justify="center">'}
            </Typography>
            <br />
            <Typography variant="caption">
                {' <Grid item xs={3} style={{textAlign: "center"}}>❄︎</Grid>'}
            </Typography>
            <br />
            <Typography variant="caption">{'</Grid>'}</Typography>
            <Grid className={classes.grid} container justify="center">
                <Grid
                    className={classes.cell}
                    item
                    xs={3}
                    style={{ textAlign: 'center' }}
                >
                    <AcUnitIcon color="primary" />
                </Grid>
            </Grid>
            <br />
            <hr />
            <br />
            <Typography variant="caption">
                Does adding alignItems="center" have any effect?
            </Typography>
            <br />
            <br />
            <Typography variant="caption">
                {'<Grid container justify="center" alignItems="center">'}
            </Typography>
            <br />
            <Typography variant="caption">
                {'<Grid item xs={3} style={{textAlign: "center"}}>❄︎</Grid>'}
            </Typography>
            <Typography variant="caption">{'</Grid>'}</Typography>
            <Grid
                className={classes.grid}
                container
                justify="center"
                alignItems="center"
            >
                <Grid
                    className={classes.cell}
                    item
                    xs={3}
                    style={{ textAlign: 'center' }}
                >
                    <AcUnitIcon color="primary" />
                </Grid>
            </Grid>
            <Typography variant="caption">
                No, because in this case it centers the cell vertically but that
                cell is <em>already</em> taking up the entire vertical height of
                the grid. So you don't see any effect, per se.
            </Typography>
            <br />
            <br />
            <Typography variant="caption">
                You would have to give the grid some height to see the effect of
                alignItems ...
            </Typography>
            <br />
            <br />
            <Typography variant="caption">
                {
                    '<Grid container justify="center" alignItems="center" style={{height: "5em"}}>'
                }
            </Typography>
            <br />
            <Grid
                container
                justify="center"
                alignItems="center"
                style={{ height: '5em', border: '1px solid gray' }}
            >
                <Grid
                    className={classes.cell}
                    item
                    xs={3}
                    style={{ textAlign: 'center' }}
                >
                    <AcUnitIcon color="primary" />
                </Grid>
            </Grid>
        </>
    )
}
