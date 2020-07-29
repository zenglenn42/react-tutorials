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
        onClose,
        MobileProps,
        PaperProps,
        style
    } = props
    const paperStyle = PaperProps.style
    const propsStyle = style
    const _style = { ...paperStyle, ...propsStyle }

    const drawerList = (
        <DrawerList
            pages={data}
            setDimensions={setDimensions}
            // On mobile, close the modal drawer after a route or external link is clicked.
            onLeafItemClick={onClose}
            // NB: Oddly, on desktop, we do the same thing but it's basically a no-op
            //     since the drawer remains invariantly open (by definition) since the
            //     underlying implementation of DesktopDrawer uses a 'permanent' variant.
        />
    )
    // Hmm. When resizing an open menu from desktop to mobile dimensions, we want
    //      the state of the drawer list to persist.  Stuff that's selected or
    //      expanded in one view should be the same for the other view.
    //
    //      Wonder if we can share the exact same drawer list between mobile and
    //      desktop views using a ref ivar?  Otherwise we could share via context
    //      to avoid diverging drawer state across views.

    return (
        <>
            {isMobile ? (
                <MobileDrawer
                    container={MobileProps.container}
                    anchor={anchor}
                    drawerContent={drawerList}
                    open={MobileProps.open}
                    onOpen={MobileProps.onOpen}
                    onClose={onClose}
                    // onOpen={MobileProps.onOpen}  // FEATURE: Add support for SwipeableDrawer
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
