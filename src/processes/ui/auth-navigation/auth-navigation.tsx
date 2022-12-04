import { AuthStack } from '@features/auth-navigation';
import { AuthErrorPageConnector, CompleteAuthPageConnector, OTPPageConnector, PhoneNumberPageConnector } from '@pages/ui';
import { PasswordPageConnector } from '@pages/ui/password-page';
import React from 'react';

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen
        name='Phone'
        component={PhoneNumberPageConnector}
      />
      <AuthStack.Screen
        name='OTP'
        component={OTPPageConnector}
      />
      <AuthStack.Screen 
        name='Password'
        component={PasswordPageConnector}
       />
      <AuthStack.Screen
        name='Complete'
        component={CompleteAuthPageConnector}
        />
      <AuthStack.Screen
        name='Error'
        component={AuthErrorPageConnector}
        />
    </AuthStack.Navigator>
  );
};
