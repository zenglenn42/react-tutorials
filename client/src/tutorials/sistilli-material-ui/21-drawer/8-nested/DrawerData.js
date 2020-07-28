// import React from 'react'
// import { Home, ContactMail, Person } from '@material-ui/icons'

export const drawerData = [
    {
        title: 'Home',
        pathname: '/'
    },
    {
        pathname: '/contact'
    },
    {
        pathname: '/about',
        children: [
            {
                pathname: '/about-lorem-ipsum',
                title: 'Lorem Ipsum'
            },
            {
                pathname: '/about-me',
                title: 'Me'
            }
        ]
    }
]
