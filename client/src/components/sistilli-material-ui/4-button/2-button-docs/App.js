import React from 'react'
import { makeStyles, Button, Typography, IconButton } from '@material-ui/core'
import classNames from 'clsx'
import { CloudUpload } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    buttonSpacing: {
        marginRight: theme.spacing(2)
    }
}))

export const App = () => {
    const classes = useStyles()

    return (
        <>
            <div>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
            </div>
            <hr />
            <div>
                <p>variant="contained"</p>
                <Button className={classes.buttonSpacing} variant="contained">Default</Button>
                <Button className={classes.buttonSpacing} variant="contained" color="primary">Primary</Button>
                <Button className={classes.buttonSpacing} variant="contained" color="secondary">Secondary</Button>
                <Button className={classes.buttonSpacing} variant="contained" disabled>Disabled</Button>
                <Button className={classes.buttonSpacing} variant="contained" href="#link">Link</Button>
                <Button className={classes.buttonSpacing} variant="contained" disableElevation>
                    <Typography style={{textTransform: "none"}}>
                        disableElevation
                    </Typography>
                </Button>
                <hr />
                <p>variant="text"</p>
                <Button className={classes.buttonSpacing} variant="text">Default</Button>
                <Button className={classes.buttonSpacing} variant="text" color="primary">Primary</Button>
                <Button className={classes.buttonSpacing} variant="text" color="secondary">Secondary</Button>
                <Button className={classes.buttonSpacing} variant="text" disabled>Disabled</Button>
                <Button className={classes.buttonSpacing} variant="text" href="#link">Link</Button>
                <Button className={classes.buttonSpacing} variant="text" disableElevation>
                    <Typography style={{textTransform: "none"}}>
                        disableElevation
                    </Typography>
                </Button>
                <hr />
                <p>variant="outlined"</p>
                <Button className={classes.buttonSpacing} variant="outlined">Default</Button>
                <Button className={classes.buttonSpacing} variant="outlined" color="primary">Primary</Button>
                <Button className={classes.buttonSpacing} variant="outlined" color="secondary">Secondary</Button>
                <Button className={classes.buttonSpacing} variant="outlined" disabled>Disabled</Button>
                <Button className={classes.buttonSpacing} variant="outlined" href="#link">Link</Button>
                <Button className={classes.buttonSpacing} variant="outlined" disableElevation>
                    <Typography style={{textTransform: "none"}}>
                        disableElevation
                    </Typography>
                </Button>
                <hr />
                <p>upload button</p>
                <div>
                    <input
                        accept="image/"
                        className={classNames("MuiButtonBase-root", "MuiButton-root", "MuiButton-outlined", classes.buttonSpacing)}
                        id="contained-button-file"
                        multiple
                        type="file"    
                    />
                    <label htmlFor="contained-button-file">
                        <Button variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                </div>
                <div>
                    <input
                        accept="image/"
                        className={classNames("MuiButtonBase-root", "MuiButton-root", "MuiButton-outlined", classes.buttonSpacing)}
                        id="icon-button-file"
                        multiple
                        type="file"    
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton color="primary" aria-label="upload picture" component="span">
                            <CloudUpload/>
                        </IconButton>
                    </label>
                </div>
            </div>
        </>
    )
}
