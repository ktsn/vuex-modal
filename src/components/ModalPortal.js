import Backdrop from './Backdrop'
import ModalContent from './ModalContent'

export default {
  beforeMount () {
    this._modal = this.$createElement()
  },

  methods: {
    update (data, children) {
      this._modal = createModalVNode(this.$createElement, data, children)
      this.$forceUpdate()
    }
  },

  render () {
    return this._modal
  }
}

function createModalVNode (h, data, children) {
  return (
    h('div', { staticClass: 'modal-wrapper' }, [
      h(Backdrop, data),
      h(ModalContent, data, children)
    ])
  )
}
