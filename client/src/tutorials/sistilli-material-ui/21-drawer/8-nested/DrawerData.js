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
                pathname: 'https://en.wikipedia.org/wiki/Lorem_ipsum',
                title: 'Lorem Ipsum',
                linkProps: {
                    'target': '_blank'
                }
            },
            {
                pathname: 'https://zenglenn42.github.io/portfolio/about.html',
                title: 'Me',
                linkProps: {
                    'target': '_blank'
                }
            }
        ]
    },
]
