import Vue from 'vue'
import ModalPortal from './ModalPortal'
import { appendToBody } from '../dom'

const portal = new Vue(ModalPortal).$mount()

export default {
  name: 'modal',

  props: {
    name: {
      type: String,
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

  computed: {
    current () {
      const modal = this.$store.getters.currentModal
      return modal && modal.name
    }
  },

  beforeDestroy () {
    portal.unregister()
  },

  render () {
    if (this.current && !portal.$el.parentNode) {
      appendToBody(portal.$el)
    }

    portal.update(this.name, this.current, {
      show: this.name === this.current,
      backdropTransition: this.backdropTransition,
      contentTransition: this.contentTransition
    }, this.$slots.default)
  }
}
