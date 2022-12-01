import { TServiceModel } from "@entities/service"

export type AppTabsParamsList = {
  paymentScreen: undefined,
  atfScreen: undefined,
  mainScreen: undefined,
  profileScreen: undefined
}
export type PaymentCategoriesStackParamsList = {
  Payment: undefined,
  MobileServices: undefined,
  MobileTransaction: TServiceModel,
}
