# Vuex Modal

Simple modal component/Vuex module.

## Installation

```bash
$ npm install --save vuex-modal
# or
$ yarn add vuex-modal
```

## Usage

1. Import `modalModule` and set it into Vuex module.

  ```js
  import Vue from 'vue'
  import Vuex from 'vuex'
  import { modalModule } from 'vuex-modal'

  Vue.use(Vuex)

  const store = new Vuex.Store({
    // ...
    modules: {
      modal: modalModule
    }
  })

  new Vue({
    el: '#app',
    store,
    // ...
  })
  ```

2. (Optional) Import base CSS file for the modal wherever you want or you can define your own styles.

  ```js
  import 'vuex-modal/dist/vuex-modal.css'
  ```

3. Use `Modal` component in your apps. You can dispatch `PUSH`, `POP`, `REPLACE` actions to manage modals.

  ```vue
  <template>
    <div>
      <button type="button" @click="open">Open Modal</button>
      <modal name="example">
        <div class="basic-modal">
          <h1 class="title">Modal Title</h1>
          <button class="button" type="button" @click="close">Close Modal</button>
        </div>
      </modal>
    </div>
  </template>

  <script>
  import { Modal, PUSH, POP } from 'vuex-modal'

  export default {
    methods: {
      open () {
        this.$store.dispatch(PUSH, { name: 'example' })
      },

      close () {
        this.$store.dispatch(POP)
      }
    },

    components: {
      Modal
    }
  }
  </script>
  ```

## License

MIT
