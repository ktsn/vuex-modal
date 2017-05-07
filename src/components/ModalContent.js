import { addStaticClass, assert } from '../utils'

export default {
  functional: true,
  name: 'modal-content',

  props: {
    show: Boolean,
    contentTransition: Object
  },

  render (h, { props, children }) {
    const { show, contentTransition } = props
    const child = ensureOnlyChild(children)

    if (child) {
      addStaticClass(child.data, 'modal-content')
    }

    return (
      h('div', { staticClass: 'modal-content-wrapper' }, [
        h('transition', { props: contentTransition }, [
          show && child
        ])
      ])
    )
  }
}

function ensureOnlyChild (children) {
  const domChildren = children.filter(c => c.tag)
  assert(domChildren.length <= 1, 'Modal must have only one child')
  return domChildren[0]
}
