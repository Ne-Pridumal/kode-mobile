import { AuthStackParamsList } from '@features/auth-navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import React from 'react';
import { AuthErroPage } from './auth-error-page';

export const AuthErrorPageConnector = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>()
  const buttonAcion = () => {
    navigation.navigate('OTP')
  }
  return (
    <AuthErroPage
      buttonAction={buttonAcion}
      crossAction={buttonAcion}
    />
  );
};
