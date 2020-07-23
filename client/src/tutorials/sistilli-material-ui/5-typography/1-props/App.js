import React from 'react'
import { Typography } from '@material-ui/core'

export const App = () => {
    return (
        <div>
            <Typography align="left">align="left"</Typography>
            <Typography align="center">align="center"</Typography>
            <Typography align="right">align="right"</Typography>
            <Typography color="secondary">color="secondary"</Typography>
            <Typography gutterBottom="6">gutterBottom="6"</Typography>
            <Typography noWrap={true}>
                noWrap={'{true}'} really long line of text, really long line of
                text, really long line of text, really long line of text, really
                long line of text, really long line of text
            </Typography>
            <Typography noWrap={false}>
                noWrap={'{false}'} really long line of text, really long line of
                text, really long line of text, really long line of text, really
                long line of text, really long line of text
            </Typography>
            <Typography variant="h1">variant="h1"</Typography>
            <Typography variant="h6" variantMapping={{ h6: 'span' }}>
                I live in a span.
            </Typography>
        </div>
    )
}
