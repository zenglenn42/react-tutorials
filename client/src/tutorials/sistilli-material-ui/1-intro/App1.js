import React from 'react'
import { Button } from '@material-ui/core'

export function App() {
    return (
        <div>
            <div>
                <Button>This is our first button</Button>
            </div>
            <br />
            <div>
                <Button variant="outlined" disabled>
                    This is our first button (disabled)
                </Button>
            </div>
            <br />
            <div>
                <Button variant="outlined">
                    This is our first button (variant="outlined")
                </Button>
            </div>
            <br />
            <div>
                <Button variant="contained">
                    This is our first button (variant="contained")
                </Button>
            </div>
            <br />
            <div>
                <Button variant="outlined" fullWidth>
                    This is our first button (fullWidth)
                </Button>
            </div>
            <br />
            <div>
                <Button color="primary" variant="outlined">
                    This is our first button (color="primary")
                </Button>
            </div>
            <br />
            <div>
                <Button color="secondary" variant="outlined">
                    This is our first button (color="secondary")
                </Button>
            </div>
            <br />
        </div>
    )
}
