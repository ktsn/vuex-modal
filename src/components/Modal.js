import Vue from 'vue'

import ModalPortal from './ModalPortal'

const portal = new Vue(ModalPortal).$mount()

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
    if (props.show && !portal.$el.parentNode) {
      document.body.appendChild(portal.$el)
    }

    data.props = props
    portal.update(data, children)
  }
}
