import React from 'react'
import { Typography, Divider } from '@material-ui/core'

const Hello = () => {
    React.useEffect(() => {
        console.log('render: effect called from <Hello>')
        return () => console.log('unmount: cleanup called from <Hello>')
    }, [])

    return (
        <div>
            <Divider />
            <Typography>hello</Typography>
            <Typography paragraph variant="caption">
                i'm a {'<Hello/>'} component
            </Typography>
            <Typography variant="caption">
                i cleanup after myself before unmounting ... see console.log
            </Typography>
            <Divider />
        </div>
    )
}

export default Hello
