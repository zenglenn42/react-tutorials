import React from 'react'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    drawerMargin: props => {
        return {
            marginTop: props.drawerAnchor === 'top' 
                ? (props.drawerDimensions.height + theme.spacing(1)) : 0,
            marginRight: props.drawerAnchor === 'right' 
                ? (props.drawerDimensions.width + theme.spacing(1.5)) 
                : theme.spacing(1.5),
            marginBottom: props.drawerAnchor === 'bottom' 
                ? (props.drawerDimensions.height + theme.spacing(1)) : 0,
            marginLeft: props.drawerAnchor === 'left' 
                ? (props.drawerDimensions.width + theme.spacing(1)) : 0
        }
    },
}))

export const Content = (props) => {
    const classes = useStyles(props)
    return (
        <div className={classes.drawerMargin}>
            <p style={{position: 'inherit'}}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur, eaque dolor? Sit incidunt illo expedita cum nulla autem doloribus non, eum quibusdam iure numquam repellendus obcaecati molestiae quisquam ab fuga?
            </p>
        </div>
    )
}

export default Content
