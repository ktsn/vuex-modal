// @flow

export const PUSH = 'modal/PUSH'
export const POP = 'modal/POP'
export const REPLACE = 'modal/REPLACE'
export const CLEAR = 'modal/CLEAR'

interface ModalData {
  name: string;
}

interface ModalState {
  stack: ModalData[];
}

interface Ctx extends ActionContext<ModalState> {} // eslint-disable-line

export default {
  state: ({ // eslint-disable-line
    stack: []
  }: ModalState),

  getters: {
    currentModal: ({ stack }: ModalState) => {
      return stack[stack.length - 1]
    }
  },

  actions: {
    [PUSH] ({ commit }: Ctx, data: ModalData) {
      commit(PUSH, data)
    },

    [POP] ({ commit }: Ctx) {
      commit(POP)
    },

    [REPLACE] ({ commit }: Ctx, data: ModalData) {
      commit(REPLACE, data)
    },

    [CLEAR] ({ commit }: Ctx) {
      commit(CLEAR)
    }
  },

  mutations: {
    [PUSH] ({ stack }: ModalState, data: ModalData): void {
      stack.push(data)
    },

    [POP] ({ stack }: ModalState): void {
      stack.pop()
    },

    [REPLACE] ({ stack }: ModalState, data: ModalData): void {
      stack.pop()
      stack.push(data)
    },

    [CLEAR] (state): void {
      state.stack = []
    }
  }
}
