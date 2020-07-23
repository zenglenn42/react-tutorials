import React from 'react'
import { Typography, Divider } from '@material-ui/core'

const Hello = () => {
    React.useEffect(() => {
        // eslint-disable-next-line no-console
        console.log('render: effect called from <Hello>')
        // eslint-disable-next-line no-console
        return () => console.log('unmount: cleanup called from <Hello>')
    }, [])

    return (
        <div>
            <Divider />
            <Typography>hello</Typography>
            <Typography paragraph variant="caption">
                i am a &lt;Hello/&gt; component.
            </Typography>
            <Typography variant="caption">
                i cleanup after myself before unmounting ... see console.log
            </Typography>
            <Divider />
        </div>
    )
}

export default Hello
