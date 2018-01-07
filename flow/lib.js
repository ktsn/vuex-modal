// @flow

declare module vue {
  declare module.exports: any;
}

declare module vuex {
  declare module.exports: any;
}

declare module 'vue-thin-modal' {
  declare module.exports: any;
}

interface ActionContext<S> {
  state: S;
  getters: any;
  dispatch: (type: string, payload: any) => void;
  commit: (type: string, payload: any) => void;
}
