<template>
  <div>
    <input type="radio" name="modal" value="foo" v-model="current">Show Foo
    <input type="radio" name="modal" value="bar" v-model="current">Show Bar
    <input type="radio" name="modal" value="long-content" v-model="current">Show Long Content
    <modal name="foo">
      <div class="basic-modal">
        <h1 class="title">Foo</h1>
        <button class="button" type="button" @click="close">Close</button>
      </div>
    </modal>
    <modal name="bar">
      <div class="basic-modal">
        <h1 class="title">Bar</h1>
        <button class="button" @click="open({ name: 'foo' })">Open Foo</button>
        <button class="button" type="button" @click="close">Close</button>
      </div>
    </modal>
    <modal name="long-content">
      <div class="basic-modal">
        <h1 class="title">Long Content</h1>
        <p>Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text Text </p>
        <button class="button" @click="close">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { Modal, PUSH, POP } from 'vuex-modal'

export default {
  computed: {
    current: {
      get () {
        const modal = this.$store.getters.currentModal
        return modal && modal.name
      },

      set (value) {
        this.open({ name: value })
      }
    }
  },

  methods: mapActions({
    open: PUSH,
    close: POP
  }),

  components: {
    Modal
  }
}
</script>

<style scoped>
.basic-modal {
  margin: 30px auto;
  padding: 30px;
  width: 800px;
}

.basic-modal.modal-content-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}

.title {
  margin: 0;
  font-weight: normal;
}
</style>
