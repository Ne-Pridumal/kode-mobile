import { RootStackParamsList } from '@features/root-stack';
import { AppNavigation, AuthNavigation, PaymentCategoriesNavigation } from '@processes/ui';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamsList>()

export const RootStackProvider = () => {
  return (
    <RootStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName='Auth'>
      <RootStack.Screen
        name='Auth'
        component={AuthNavigation}
      />
      <RootStack.Screen
        name='App'
        component={AppNavigation}
      />
      <RootStack.Screen
        name='PaymentCategories'
        component={PaymentCategoriesNavigation}
      />
    </RootStack.Navigator>
  );
};
