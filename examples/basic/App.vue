<template>
  <div>
    <input type="checkbox" v-model="show">Show Modal
    <modal :show="show">
      <div class="basic-modal">
        <h1 class="title">Modal</h1>
        <button class="button" type="button" @click="show = false">Close</button>
      </div>
    </modal>
  </div>
</template>

<script>
import { Modal } from 'vuex-modal'

export default {
  data () {
    return {
      show: false
    }
  },
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

.title {
  margin: 0;
  font-weight: normal;
}
</style>
