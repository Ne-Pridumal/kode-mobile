import { createEffect, createEvent, createStore } from "effector";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TPaymentCategory, TRequestPaymentCategories } from "./types";
import { addSnek } from "@entities/sneks";

const QUERY_KEY = 'payment-categories'

type TCachedData = {
  date: Date,
  data: TRequestPaymentCategories
}

export const getPaymentCategoriesFX = createEffect(async (): Promise<TRequestPaymentCategories> => {
  const cachedData: string | null = await AsyncStorage.getItem(QUERY_KEY)

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
  const data = await request.json();
  const preparedCachingData: TCachedData = {
    data,
    date: cacheTimer
  }
  const cache = JSON.stringify(preparedCachingData)
  try {
    await AsyncStorage.setItem(QUERY_KEY, cache)
  }
  catch {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
    return { category: $categoriesList.getState() }
  }
  console.log('requested data')

  return data
})


export const $categoriesList = createStore<TPaymentCategory[]>([])
  .on(getPaymentCategoriesFX.doneData, (_, payload) => payload.category)
  .on(getPaymentCategoriesFX.failData, () => {
    addSnek({
      id: Date.now(),
      type: 'alarm',
      title: 'Что-то пошло не так',
      timer: 5000
    })
  })
