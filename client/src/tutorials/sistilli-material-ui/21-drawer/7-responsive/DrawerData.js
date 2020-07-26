import React from 'react'
import { Home, ContactMail, Person } from '@material-ui/icons'

export const drawerData = [
    {
        text: 'Home',
        icon: <Home />,
        routepath: '/'
        // onClick: () => history.push('/')
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        routepath: 'contact'
    },
    {
        text: 'About',
        icon: <Person />,
        routepath: '/about'
    }
]
