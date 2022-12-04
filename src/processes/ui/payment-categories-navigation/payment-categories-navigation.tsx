import { PaymentCategoriesStack } from "@features/app-navigation";
import { ServicesPageConnector, MobileTransactionPageConnector, } from "@pages/ui";
import { useTheme } from "styled-components";

export const PaymentCategoriesNavigation = () => {
  const { palette } = useTheme()
  return (
    <PaymentCategoriesStack.Navigator>
      <PaymentCategoriesStack.Screen
        name='MobileServices'
        options={{
          headerTitle: 'Мобильная связь',
          headerStyle: {
            backgroundColor: palette.background.primary,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center'
        }}
        component={ServicesPageConnector} />
      <PaymentCategoriesStack.Screen
        name='MobileTransaction'
        options={{
          headerStyle: {
            backgroundColor: palette.background.primary,
          },
          headerShadowVisible: false,
          headerTitleAlign: 'center'
        }}
        component={MobileTransactionPageConnector}
      />
    </PaymentCategoriesStack.Navigator>
  );
};
