import React from 'react'
import { makeStyles, Grid, Typography, Divider } from '@material-ui/core'

const useClasses = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        paddingBottom: theme.spacing(1),
    }
}))

export const CenteredGrid = () => {
    const classes = useClasses()

    return (
        <div className={classes.root}>
            <Grid container spacing={2} direction="column">
                <Grid item xs={12} container>
                    <Grid item xs={2} style={{alignSelf: "center"}}>
                        <Typography>
                            Welcome, Anthony
                        </Typography>
                    </Grid>
                    <Grid item xs={8} />
                    <Grid item xs={2} style={{alignSelf: "center"}}>
                        <Typography align="right">
                            Logout
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <Divider/>
                </Grid>
                <Grid item xs={12} container spacing={2}>
                    <Grid item xs={6} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto optio, facere, 
                        quis omnis totam fugiat ullam amet expedita provident voluptatum repellat maxime 
                        modi velit cumque et quibusdam eaque rem a!
                    </Grid>
                    <Grid item xs={6} >
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto optio, facere, 
                        quis omnis totam fugiat ullam amet expedita provident voluptatum repellat maxime 
                        modi velit cumque et quibusdam eaque rem a!
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}



