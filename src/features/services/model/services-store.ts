import { TServiceModel } from "@entities/service";
import { addSnek } from "@entities/sneks";
import { TRequestPaymentCategories } from "@features/payment-categories/model/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createEffect, createEvent, createStore } from "effector";

const SERVICES_KEY = 'services'

type TCachedData = {
  date: Date,
  data: TServiceModel[]
}

type TServicesList = {
  list: TServiceModel[],
  filteredList: TServiceModel[],
  search: string
}


export const getMobileServicesFX = createEffect(async (): Promise<TServiceModel[]> => {
  const cachedData: string | null = await AsyncStorage.getItem(SERVICES_KEY)

  if (cachedData !== null) {
    const parsedCache: TCachedData = JSON.parse(cachedData)
    if (new Date(parsedCache.date) > new Date()) {
      console.log('cached data')
      return parsedCache.data
    }
  }

  const url = `https://github.com/kode-frontend/files/raw/main/categories.json`;
  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const cacheIntervalInHours = 24 //24 часа
  const cacheTimer = new Date()
  cacheTimer.setHours(cacheTimer.getHours() + cacheIntervalInHours)
  const { category } = await request.json() as TRequestPaymentCategories;
  const data = category.find(c => c.category_name === 'Мобильная связь')!.services
  const preparedCachingData: TCachedData = {
    data,
    date: cacheTimer
  }
  const cache = JSON.stringify(preparedCachingData)
  try {
    await AsyncStorage.setItem(SERVICES_KEY, cache)
  }
  catch {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
    return $servicesList.getState().list
  }
  console.log('requested data')

  return data
})

export const updateServicesFX = createEffect(async (): Promise<TServiceModel[]> => {
  const url = `https://github.com/kode-frontend/files/raw/main/categories.json`;
  const request = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })

  const cacheIntervalInHours = 24 //24 часа
  const cacheTimer = new Date()
  cacheTimer.setHours(cacheTimer.getHours() + cacheIntervalInHours)
  const { category } = await request.json() as TRequestPaymentCategories;
  const data = category.find(c => c.category_name === 'Мобильная связь')!.services
  const preparedCachingData: TCachedData = {
    data,
    date: cacheTimer
  }
  const cache = JSON.stringify(preparedCachingData)
  try {
    await AsyncStorage.removeItem(SERVICES_KEY)
    await AsyncStorage.setItem(SERVICES_KEY, cache)
  }
  catch {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
    return $servicesList.getState().list
  }
  console.log('update data')

  return data
})

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
  .on(getMobileServicesFX.doneData, (_, payload) => ({
    list: payload,
    filteredList: payload,
    search: ''
  }))
  .on(updateServicesFX.failData, () => {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
  })
  .on(updateServicesFX.doneData, (_, payload) => ({
    list: payload,
    filteredList: payload,
    search: ''
  }))
  .on(updateServicesFX.failData, () => {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
  })
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
