import Vue from 'vue'

import Backdrop from './Backdrop'
import ModalContent from './ModalContent'

const modalVM = new Vue({
  render: h => h()
}).$mount()

function createModalVNode (h, data, children) {
  return (
    h('div', { staticClass: 'modal-wrapper' }, [
      h(Backdrop, data),
      h(ModalContent, data, children)
    ])
  )
}

export default {
  functional: true,

  props: {
    show: {
      type: Boolean,
      required: true
    },
    backdropTransition: {
      type: Object,
      default () {
        return { name: 'modal-backdrop' }
      }
    },
    contentTransition: {
      type: Object,
      default () {
        return { name: 'modal-content' }
      }
    }
  },

  render (h, { props, data, children }) {
    if (props.show && !modalVM.$el.parentNode) {
      document.body.appendChild(modalVM.$el)
    }

    data.props = props
    modalVM._update(createModalVNode(modalVM.$createElement, data, children))
  }
}
