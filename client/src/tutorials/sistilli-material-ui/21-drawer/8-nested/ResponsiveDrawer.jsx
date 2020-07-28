import React from 'react'
import MobileDrawer from './MobileDrawer'
import DesktopDrawer from './DesktopDrawer'
import { DrawerList } from './DrawerList'

export const ResponsiveDrawer = (props) => {
    const {
        isMobile,
        anchor,
        data,
        setDimensions,
        MobileProps,
        PaperProps,
        style
    } = props
    const drawerList = <DrawerList pages={data} setDimensions={setDimensions} />
    const paperStyle = PaperProps.style
    const propsStyle = style
    const _style = { ...paperStyle, ...propsStyle }

    return (
        <>
            {isMobile ? (
                <MobileDrawer
                    container={MobileProps.container}
                    anchor={anchor}
                    drawerContent={drawerList}
                    open={MobileProps.open}
                    onClose={MobileProps.onClose}
                    onClick={MobileProps.onClick}
                    ModalProps={{ keepMounted: true }}
                    PaperProps={{ ...PaperProps, style: { ..._style } }}
                />
            ) : (
                <DesktopDrawer
                    anchor={anchor}
                    drawerContent={drawerList}
                    PaperProps={{ ...PaperProps, style: { ..._style } }}
                />
            )}
        </>
    )
}

export default ResponsiveDrawer
