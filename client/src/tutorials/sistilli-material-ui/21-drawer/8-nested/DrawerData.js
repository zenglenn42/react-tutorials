import React from 'react'
import { Home, ContactMail } from '@material-ui/icons'
import { Person, Widgets } from '@material-ui/icons'

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
        icon: <Person />,
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
    },
    { pathname: 'divider' },
    {
        pathname: '/components',
        icon: <Widgets />,
        children: [
            {
                pathname: '/components',
                subheader: '/components/layout',
                children: [
                    { pathname: '/components/box' },
                    { pathname: '/components/container' }
                ]
            },
            {
                pathname: '/components',
                subheader: '/components/inputs',
                children: [
                    { pathname: '/components/buttons' },
                    { pathname: '/components/button-group' },
                    { pathname: '/components/pickers', title: 'Date / Time' }
                ]
            }
        ]
    }
]
