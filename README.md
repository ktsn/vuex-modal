# Vuex Modal

Simple modal component/Vuex module.

## Installation

```bash
$ npm install --save vuex-modal
# or
$ yarn add vuex-modal
```

## Usage

1. Use `VueModal` as a plugin in your main app

  ```js

  import Vue from 'vue'
  import VuexModal from 'vuex-modal'

  import store from './yourstore'

  // Use VueModal plugin
  Vue.use(VuexModal, { store })

  new Vue({
    ...
  })
  ```

**Note:** We have to receive the store object through the `Vue.use()` install options


2. (Optional) Import base CSS file for the modal wherever you want or you can define your own styles.

  ```js
  import 'vuex-modal/dist/vuex-modal.css'
  ```

3. Use `Modal` component in your apps. You can use the `$modal` property on your component.

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
  import { Modal} from 'vuex-modal'

  export default {
    methods: {
      open () {
        this.$modal.open('example')
      },

      close () {
        this.$modal.close()
      }
    },

    components: {
      Modal
    }
  }
  </script>
  ```


**Protip:** you can also use the `$modal` methods directly in the template:

```html
<button type="button" @click="$modal.open('example')">Open Modal</button>
```


## Use store only

It is possible to not use the `VuexModal` plugin, this by attaching the `modalModule` from `vuex-modal` to your store. Make sure to name it `modal` for dependency on that name.

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





## `$modal` methods

When you initiated the plugin through `Vue.use()` you can start using the `$modal` property on your components. Couple of methods are included:

Method | Description | Example
-------|-------------|------------
`open(name)` | Open modal that corresponds to the name | `this.$modal.open('example')`
`close()` | Closes the current modal, goes back to previous modal state | `this.modal.close()`
`replace(name)` | Replaces the current modal with a new modal that corresponds to the name | `this.$modal.replace('example2')`
`closeAll()` | Closes all the current modal states | `this.$modal.closeAll()`


## License

MIT
