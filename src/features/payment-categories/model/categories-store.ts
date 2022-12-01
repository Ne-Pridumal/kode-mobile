import { createEvent, createStore } from "effector";
import { TPaymentCategory } from "./types";


export const $categoriesList = createStore<TPaymentCategory[]>([])

export const setCategoriesList = createEvent<TPaymentCategory[]>()

$categoriesList.on(setCategoriesList, (_, payload) => payload)
