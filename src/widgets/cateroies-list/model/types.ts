import { TCategoryModel } from "@entities/category";

export type TPaymentMenuItem = Omit<TCategoryModel, 'category_id'> & {
  onPress: () => void
}
