// @flow

import modalStore, { POP, PUSH, REPLACE, CLEAR } from './module'  

function plugin(Vue, { store }) {
	if (!store) {
		throw new Error("Please provide vuex store.");
	}
	// register your own vuex module 
	store.registerModule('modal', modalStore);

	Vue.prototype.$modal = {
		open(name) {
			store.dispatch(PUSH, {name: name})
		},
		close() {
			store.dispatch(POP)
		},
		replace(name) {
			store.dispatch(REPLACE, {name: name})
		},
		closeAll() {
			store.dispatch(CLEAR)
		}
	}
}

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
