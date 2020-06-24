import React from 'react'
import { makeStyles, Button, Typography, IconButton } from '@material-ui/core'
import { CloudUpload, Delete, Send } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    buttonSpacing: {
        marginRight: theme.spacing(2)
    },
    input: {
        display: "none"
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
                        className={classes.input}
                        id="contained-button-file"
                        multiple
                        type="file"    
                    />
                    <label htmlFor="contained-button-file">
                        <Button className={classes.buttonSpacing} variant="contained" color="primary" component="span">
                            Upload
                        </Button>
                    </label>
                    <input
                        accept="image/"
                        className={classes.input}
                        id="icon-button-file"
                        multiple
                        type="file"    
                    />
                    <label htmlFor="icon-button-file">
                        <IconButton className={classes.buttonSpacing} color="primary" aria-label="upload picture" component="span">
                            <CloudUpload/>
                        </IconButton>
                    </label>
                </div>
                <hr />
                <p>size = "small" | "medium" | "large" </p>
                <Button size="small"  variant="contained" className={classes.buttonSpacing}>small</Button>
                <Button size="medium" variant="contained" className={classes.buttonSpacing}>medium</Button>
                <Button size="large"  variant="contained" className={classes.buttonSpacing}>large</Button>
                <hr />
                <p>embed icons with startIcon or endIcon props</p>
                <Button variant="contained" color="secondary" className={classes.buttonSpacing} startIcon={<Delete />} >
                    Delete
                </Button>
                <Button variant="contained" color="primary" className={classes.buttonSpacing} endIcon={<Send />} >
                    Send
                </Button>
                <Button variant="contained" color="default" className={classes.buttonSpacing} startIcon={<CloudUpload />} >
                    Upload
                </Button>
                <hr />
                <p>ripple effect on click</p>
                <Button variant="contained" className={classes.buttonSpacing}>With Ripple</Button>
                <Button variant="contained" className={classes.buttonSpacing} disableRipple>
                    <span style={{textTransform: "none"}}>disableRipple</span>
                </Button>
            </div>
        </>
    )
}
