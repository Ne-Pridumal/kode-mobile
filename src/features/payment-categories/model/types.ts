import { TCategoryModel } from "@entities/category"
import { TServiceModel } from "@entities/service"

export type TPaymentCategory = TCategoryModel & {
  services: TServiceModel[]
}

export type TRequestPaymentCategories = {
  category: TPaymentCategory[]
}
