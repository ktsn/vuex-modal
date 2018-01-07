// @flow

export const PUSH = 'modal/PUSH'
export const POP = 'modal/POP'
export const REPLACE = 'modal/REPLACE'

interface ModalData {
  name: string;
}

interface ModalState {
  stack: ModalData[];
}

interface Ctx extends ActionContext<ModalState> {} // eslint-disable-line

export function generateModule (mediator: any) {
  return {
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
        mediator.push(data.name)
        commit(PUSH, data)
      },

      [POP] ({ commit }: Ctx) {
        mediator.pop()
        commit(POP)
      },

      [REPLACE] ({ commit }: Ctx, data: ModalData) {
        mediator.replace(data.name)
        commit(REPLACE, data)
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
      }
    }
  }
}
