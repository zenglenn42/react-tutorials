import { useTheme } from '@material-ui/core'
import { useMediaQuery } from 'beautiful-react-hooks'

export const useIsDesktop = (bpUp = 'sm') => {
    // Any window width >= bpUp is 'Desktop'
    //
    // bpUp = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

    const theme = useTheme()
    const bpWidth = theme.breakpoints.values[bpUp]
    const isDesktopQuery = `(min-width: ${bpWidth}px)`

    return useMediaQuery(isDesktopQuery)
}

export const useIsLandscape = () => {
    return useMediaQuery('orientation: landscape')
}

export const useIsPortrait = () => {
    return useMediaQuery('orientation: portrait')
}

export default useIsDesktop
