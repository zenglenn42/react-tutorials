// Courtesy Material-UI
// https://github.com/mui-org/material-ui/blob/next/LICENSE

const upperFirst = require('lodash/upperFirst')
const camelCase = require('lodash/camelCase')

export function titleize(string) {
    if (process.env.NODE_ENV !== 'production') {
        if (typeof string !== 'string' || string.length <= 0) {
            console.error(
                'titleize(string) expects a non empty string argument.'
            )
        }
    }

    return string
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

export function pageToTitle(page) {
    if (page.title === false) {
        return null
    }

    if (page.title) {
        return page.title
    }

    const path = page.subheader || page.pathname
    const name = path.replace(/.*\//, '')

    if (path.indexOf('/api/') !== -1) {
        return upperFirst(camelCase(name))
    }

    return titleize(name)
}
