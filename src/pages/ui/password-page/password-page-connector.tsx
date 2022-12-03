import { IconLock } from '@shared/ui/core/atoms/icons';
import React, { useState } from 'react';
import { PasswordPage } from './password-page';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthStackParamsList } from '@features/auth-navigation/types';
import { Alert, BackHandler } from 'react-native'
import { addSnek } from '@entities/sneks';


export const PasswordPageConnector = () => {
  const { palette } = useTheme()
  const [inputValue, setInputValue] = useState<string>('')
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>()
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false)
  const alertAction = () => (
    Alert.alert(
      'Вы точно хотите выйти?',
      '',
      [
        {
          text: 'Отмена',
          onPress: () => null,
          style: 'cancel'
        },
        {
          text: 'Выйти',
          onPress: () => navigation.navigate('Phone'),
          style: 'destructive'
        }
      ],
      {
        cancelable: true,
      }
    )
  )
  const buttonAction = () => {
    if (inputValue.length < 5) {
      addSnek({
        id: Date.now(),
        title: 'Длина пароля должна быть не менее 5 символов',
        type: 'alarm',
        timer: 5000,
      })
    }
    else {

      navigation.navigate('Complete')
    }
  }

  return (
    <PasswordPage
      inputProps={{
        inputProps: {
          value: inputValue,
          onChangeText: (e) => setInputValue(e),
          secureTextEntry: isShowPassword,
        },
        beforeIcon: <IconLock />,
        afterIcon: isShowPassword
          ?
          (
            <Ionicons
              name="ios-eye-off-outline"
              onPress={() => setIsShowPassword(false)}
              size={24}
              color={palette.text.tertiary} />
          )
          :
          (
            <Ionicons
              name="ios-eye-outline"
              onPress={() => setIsShowPassword(true)}
              size={24}
              color="white" />
          ),
      }}
      buttonAction={buttonAction}
      crossAction={alertAction}
    />
  );
}; 
