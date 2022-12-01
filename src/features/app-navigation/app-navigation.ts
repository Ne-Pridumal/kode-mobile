import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { PaymentCategoriesStackParamsList, AppTabsParamsList } from "./types";


export const MainTab = createBottomTabNavigator<AppTabsParamsList>();
export const PaymentCategoriesStack = createNativeStackNavigator<PaymentCategoriesStackParamsList>()
