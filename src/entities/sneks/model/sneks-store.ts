import { TAlertPopUp } from "@shared/ui/core/molecules";
import { createStore, createEvent } from "effector";

type TSnek = Omit<TAlertPopUp, 'closeAction'> & {
  id: number,
  timer: number
}
type TRemoveActionProps = {
  id: number
}

export const addSnek = createEvent<TSnek>();
export const removeSnek = createEvent<TRemoveActionProps>()

export const $sneksList = createStore<TSnek[]>([])

$sneksList.on(addSnek, (state, payload) => {
  const isSnekExist = state.find(snek => snek.title === payload.title)
  if (!isSnekExist) {
    const newState = [...state]
    newState.unshift(payload)
    return [...newState]
  }
  const newState = state.filter(snek => snek.title !== payload.title)
  newState.unshift(payload)

  return [...newState]
})

$sneksList.on(removeSnek, (state, payload) => (state.filter(snek => snek.id !== payload.id)))

addSnek.watch((snek) => {
  return setTimeout(() => {
    const state = $sneksList.getState()
    const snekIndex = state.find(sSnek => sSnek.id === snek.id)?.id
    if (snekIndex) {
      removeSnek({ id: snekIndex })
    }
  }, snek.timer)
})
