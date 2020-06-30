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
                        Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software
                    </Grid>
                    <Grid item xs={6} >
                        Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}



