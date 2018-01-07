// @flow

import Vue from 'vue'
import { generateModal, generateMediator } from 'vue-thin-modal'
import { generateModule } from './module'

export {
  PUSH,
  POP,
  REPLACE
} from './module'

const mediator = generateMediator(Vue)
export const Modal = generateModal(Vue, mediator)
export const modalModule = generateModule(mediator)
