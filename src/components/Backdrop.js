// @flow

export default {
  functional: true,
  name: 'backdrop',

  props: {
    show: Boolean,
    backdropTransition: Object
  },

  render (h: Function, { props }: any) {
    const { show, backdropTransition } = props

    return h('transition', { props: backdropTransition }, [
      show && h('div', { staticClass: 'modal-backdrop' })
    ])
  }
}
