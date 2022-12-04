import { AppTabsParamsList, PaymentCategoriesStackParamsList } from "@features/app-navigation"
import { AuthStackParamsList } from "@features/auth-navigation/types"
import { NavigatorScreenParams } from "@react-navigation/native"

export type RootStackParamsList = {
  App: NavigatorScreenParams<AppTabsParamsList>,
  Auth: NavigatorScreenParams<AuthStackParamsList>,
  PaymentCategories: NavigatorScreenParams<PaymentCategoriesStackParamsList>
}
