import { IconAtf, IconPayment, IconProfile, IconWallet } from '@shared/ui/core/atoms/icons';
import { BottomIcon } from '@shared/ui/core/molecules';
import { MainTab } from '@features/app-navigation/app-navigation';
import { PaymentCategoriesNavigation } from '../payment-categories-navigation/payment-categories-navigation';
import { OnlyTitleScreen } from '@pages/ui/only-title-page';
import { useTheme } from 'styled-components';
import { OTPPageConnector, PhoneNumberPageConnector } from '@pages/ui';

export const AppNavigation = () => {
  const { palette } = useTheme()
  return (
    <MainTab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#312C39',
          paddingTop: 14,
          paddingBottom: 6,
          height: 56,
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        tabBarActiveTintColor: '#F678BA',
        tabBarInactiveTintColor: '#F678BA',
      }}
    >

      <MainTab.Screen
        name='mainScreen'
        component={OTPPageConnector}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              title='Главная'
              icon={<IconWallet color={focused ? palette.accent.secondary : palette.text.secondary} />}
              isActive={focused}
            />
          ),
        }}
      />
      <MainTab.Screen
        name='paymentScreen'
        component={PaymentCategoriesNavigation}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              title='Платежи'
              icon={<IconPayment color={focused ? palette.accent.secondary : palette.text.secondary} />}
              isActive={focused}
            />
          ),
        }}
      />
      <MainTab.Screen
        name='atfScreen'
        component={OnlyTitleScreen({ title: 'Платежи' })}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              title='Платежи'
              icon={<IconAtf color={focused ? palette.accent.secondary : palette.text.secondary} />}
              isActive={focused}
            />
          ),
        }}
      />
      <MainTab.Screen
        name='profileScreen'
        component={OnlyTitleScreen({ title: 'Профиль' })}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <BottomIcon
              title='Профиль'
              icon={<IconProfile color={focused ? palette.accent.secondary : palette.text.secondary} />}
              isActive={focused}
            />
          ),
        }}
      />
    </MainTab.Navigator>
  );
};
