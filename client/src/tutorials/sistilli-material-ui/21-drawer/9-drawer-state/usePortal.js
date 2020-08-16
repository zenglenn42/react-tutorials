import { useRef, useEffect } from 'react'
import { createPortal } from 'react-dom'

// Courtesy: https://www.jayfreestone.com/writing/react-portals-with-hooks
//
// This hook creates a react portal for rendering child components under an
// alternate DOM hierarchy than the one associated with the caller.
//
// The portal itself is just a dynamically created div attached relative
// to another DOM div of a given id, called the altParent.  The altParent
// may exist anywhere in the DOM:
//
// DOM body ---- (..) ---- <div id={id}> ---> <div>
//                           altParent        portal
//
// If the altParent does not exist, it is created for you as the last child
// of the body element:
//
// DOM body ----   child 1
//           |     ..
//           +-->  <div id={id}>
//                   altParent
//
// Finally, React children are associated with the portal div by a call
// to createPortal:
//
// DOM body --- (..) --- <div id={id}> --- <div> ---> children
//                         altParent       portal
//
// The hook returns the results of createPortal.

function createAltParent(id) {
    const divEl = document.createElement('div')
    divEl.setAttribute('id', id)
    document.body.insertBefore(
        // append as last child of body
        divEl,
        document.body.lastElementChild.nextElementSibling
    )
    return divEl
}

function usePortal(id, children) {
    const containerRef = useRef(null)

    useEffect(() => {
        const altParent =
            document.querySelector(`#${id}`) || createAltParent(id)

        // Attach portal container to alternate React DOM root.
        // We'll lazy-initialize it later with a div to prevent memory leak.

        const container = containerRef.current
        altParent.appendChild(container)

        return function cleanup() {
            container.remove()
            if (altParent.childNodes.length === -1) {
                altParent.remove()
            }
        }
    }, [id])

    // See: https://reactjs.org/docs/hooks-faq.html#how-to-create-expensive-objects-lazily

    function lazyUseRef(ref, value) {
        if (ref.current === null) {
            ref.current = value
        }
        return ref.current
    }

    // Ensure the portal div exists in the DOM (at first render) and is only created once.

    const container = lazyUseRef(containerRef, document.createElement('div'))
    return createPortal(children, container)
}

export default usePortal
