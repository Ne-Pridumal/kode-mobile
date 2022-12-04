import { AppTabsParamsList } from '@features/app-navigation';
import { RootStackParamsList } from '@features/root-stack';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { CompleteAuthPage } from './complete-auth-page';

export const CompleteAuthPageConnector = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamsList>>()
  const buttonAction = () => {
    navigation.navigate('App', {
      screen: 'mainScreen'
    })
  }
  return (
    <CompleteAuthPage
      buttonAction={buttonAction}
    />
  );
};
