import { TServiceModel } from "@entities/service";
import { createEffect, createEvent, createStore } from "effector";


type TServicesList = {
  list: TServiceModel[],
  filteredList: TServiceModel[],
  search: string
}

export const $servicesList = createStore<TServicesList>({
  list: [],
  filteredList: [],
  search: ''
})

export const setServicesList = createEvent<TServiceModel[]>()

$servicesList.on(setServicesList, (_, payload) => ({
  list: payload,
  filteredList: payload,
  search: ''
}))

export const setServicesSearch = createEvent<string>()

$servicesList
  .on(setServicesList, (_, payload) => ({
    list: payload,
    filteredList: payload,
    search: ''
  }))
  .on(setServicesSearch, (state, payload) => {
    const { list } = state
    const newFilteredList = list.filter(service => service.service_name.toLowerCase().includes(payload.toLowerCase()))
    return ({
      ...state,
      filteredList: newFilteredList,
      search: payload
    })
  })

export const updateServiceList = createEffect()
