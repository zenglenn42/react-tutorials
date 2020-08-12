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
                title: 'About lorem',
                linkProps: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            },
            {
                pathname: 'https://zenglenn42.github.io/portfolio/about.html',
                title: 'About me',
                linkProps: {
                    target: '_blank',
                    rel: 'noopener noreferrer'
                }
            }
        ]
    },
    { pathname: 'divider' },
    {
        pathname: '/components',
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
