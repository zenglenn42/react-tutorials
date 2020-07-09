import React, { useRef } from 'react'
import { Typography, Divider } from '@material-ui/core'

const Hello = () => {
    const  renders = useRef(0)

    return (
        <div>
            <Divider/>
            <Typography>hello</Typography>
            <Typography paragraph variant="caption">i'm a {'<Hello/>'} component with a 'renders' ref</Typography>
            <Typography variant="caption">num renders: {renders.current++}</Typography>
            <Divider/>
        </div>
    )
}

export default Hello
