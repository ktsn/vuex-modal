import { addStaticClass } from '../utils'

export default {
  functional: true,

  props: {
    show: Boolean,
    contentTransition: Object
  },

  render (h, { data, props, children }) {
    const { show, contentTransition } = props

    addStaticClass(data, 'modal-content')

    return (
      h('div', { staticClass: 'modal-content-wrapper' }, [
        h('transition', { props: contentTransition }, [
          show && h('div', data, children)
        ])
      ])
    )
  }
}
