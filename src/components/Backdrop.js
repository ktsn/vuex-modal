export default {
  functional: true,
  name: 'backdrop',

  props: {
    show: Boolean,
    backdropTransition: Object
  },

  render (h, { props }) {
    const { show, backdropTransition } = props

    return h('transition', { props: backdropTransition }, [
      show && h('div', { staticClass: 'modal-backdrop' })
    ])
  }
}
