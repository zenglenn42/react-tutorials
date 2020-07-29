import React from 'react'
import { Home, ContactMail } from '@material-ui/icons'
// import { Person } from '@material-ui/icons'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'

export const drawerData = [
    {
        title: 'Home',
        pathname: '/',
        icon: <Home />
    },
    {
        pathname: '/contact',
        icon: <ContactMail />
    },
    {
        pathname: '/about',
        icon: <ArrowDropDownIcon />,
        children: [
            {
                pathname: 'https://en.wikipedia.org/wiki/Lorem_ipsum',
                title: 'About lorem',
                linkProps: {
                    target: '_blank'
                }
            },
            {
                pathname: 'https://zenglenn42.github.io/portfolio/about.html',
                title: 'About me',
                linkProps: {
                    target: '_blank'
                }
            }
        ]
    }
]
