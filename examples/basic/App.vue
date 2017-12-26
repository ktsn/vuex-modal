<template>
  <div class="app">
    <h1 class="module-title">Vuex Modal</h1>
    <div class="example-wrapper">
      <h2>Installation</h2>

      <p>The installation is pretty straightforward, let Vue know you want to use the <span class="font-weight: bold">VueModal</span> plugin:</p>
      <pre><code>
        import Vue from 'vue'
        <span class="highlight">import VuexModal from 'vuex-modal'</span>

        import store from './yourstore'

        <i>// Use VueModal plugin</i>
        <span class="highlight">Vue.use(VuexModal, { store })</span>

        new Vue({
          ...
        })
      </code></pre>
      <p><strong>Note</strong> that we <strong>pass the store</strong> as plugin options, this is required.</p>


      <div class="buttons">
        <button @click="$modal.open('first')">Simple Example</button>
        <button @click="$modal.open('layered')">Multiple Modals</button>
        <button @click="$modal.open('styling')">Styling instruction</button>
      </div>

      <modal name="first">
        <div class="modal-content">
          <h1 class="title">Simple example</h1>



          <button class="button" type="button" @click="$modal.close">Close</button>
        </div>
      </modal>
      <modal name="layered">
        <div class="modal-content">
          <h1 class="title">Multiple modals</h1>
          <p>
            It is possible to create a "trail" of modals layered on eachother:
          </p>

          <button class="button" @click="$modal.open('second-layered')">Open next modal</button>
          <button class="button" type="button" @click="$modal.close">Close</button>
        </div>
      </modal>
      <modal name="second-layered">
        <div class="modal-content">
          <h1 class="title">Second Modal </h1>
          <p>
            Creating an easy way to create steps in between modal states.
          </p>

          <button class="button" type="button" @click="$modal.close">Back</button>
          <button class="button" type="button" @click="$modal.closeAll">Close</button>
        </div>
      </modal>
      <modal name="styling">
        <div class="modal-content">
          <h1 class="title">Styling instructions</h1>
          <p>This styling is mostly an example, but you can use your own. The structure that is used for styling is the following html struture:</p>

          <pre>
            &lt;div class="modal-wrapper"&gt;
              &lt;div class="modal-backdrop"&gt;&lt;/div&gt;
              &lt;div class="modal-content-wrapper"&gt;
                ...your content shown in name
              &lt;/div&gt;
            &lt;/div&gt;
          </pre>

          <button class="button" @click="$modal.close">Close</button>
        </div>
      </modal>
    </div>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import { Modal, PUSH, POP } from 'vuex-modal'

export default {

  components: {
    Modal
  }
}
</script>

<style scoped>
.app {
  font-family: Arial, Helvetica, sans-serif;
}

.modal-content {
  margin: 30px auto;
  padding: 30px;
  width: 80%;
  font-family: Arial, Helvetica, sans-serif;
}

.example-wrapper {
  position: absolute;
  width: 80%;
  left: 10%;
  background: #f5f5f5;
  padding: 25px;
  border-radius: 10px;
}

.buttons button {
  background: #333;
  border-radius: 5px;
  padding: 10px;
  color: #FFF;
}

.modal-content.modal-content-leave-active {
  position: absolute;
  left: 0;
  right: 0;
}

.title {
  margin: 0;
  font-weight: normal;
}

.module-title {
  text-align: center;
}

.highlight {
  color: #40d119;
}
</style>
