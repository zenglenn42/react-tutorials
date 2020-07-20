import React, { Divider } from 'react'
import {
    Home,
    ContactMail,
    Person,
    Work,
    AcUnit,
    LocalDrink,
    DirectionsWalk,
} from '@material-ui/icons'

export const navItems = [
    {
        text: 'Home',
        icon: <Home />,
        // onClick: () => history.push('/')
    },
    {
        text: 'Contact',
        icon: <ContactMail />,
        // onClick: () => history.push('/contact')
    },
    {
        text: 'About',
        icon: <Person />,
        // onClick: () => history.push('/about')
    },
    {
        text: 'Work',
        icon: <Work />,
        // onClick: () => history.push('/work')
    },
    {
        divider: <Divider />,
    },
    {
        text: 'Make snow',
        icon: <AcUnit />,
        // onClick: () => history.push('/makesnow')
    },
    {
        text: 'Drink',
        icon: <LocalDrink />,
        // onClick: () => history.push('/drink')
    },
    {
        text: 'Walk',
        icon: <DirectionsWalk />,
        // onClick: () => history.push('/walk')
    },
]
