import React from 'react'
import { Button, Typography } from '@material-ui/core'
import { withRouter } from 'react-router-dom'

const SpecialButton = withRouter(({ history }) => {
    return (
        <Button
            variant="contained"
            onClick={() => {
                history.push('/posts/special')
            }}
        >
            <Typography style={{ textTransform: 'none' }}>
                Special Button ( wrapped by withRouter() )
            </Typography>
        </Button>
    )
})

export default SpecialButton
