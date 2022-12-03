import { setOtpInfo, useGetOTPCode } from '@entities/user-info';
import { AuthStackParamsList } from '@features/auth-navigation/types';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { OTPScreen } from './otp-page';
import {Alert, BackHandler} from 'react-native'

export const OTPPageConnector = () => {
  const { params } = useRoute<RouteProp<AuthStackParamsList, 'OTP'>>()
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>()
  const [keyboardState, setKeyboardState] = useState<string>('')
  const [inputLenght, setInputLenght] = useState<'2' | '4' | '6'>('4')
  const [otpStatus, setOtpStatus] = useState<'default' | 'error'>('default')
  const { mutateAsync: getOtpInfo, isLoading, data, isSuccess, isError } = useGetOTPCode()
  const [attempsCounter, setAttempsCounter] = useState<number>(5)

  useEffect(() => {
    if(attempsCounter === 0){
      Alert.alert(
        'Вы ввели неверно код 5 раз',
        'Данная сессия авторизации будет сброшена!',
        [
          {
            text: 'Выход',
            onPress: () => BackHandler.exitApp(),
            style: 'default'
          }
        ],
        {
          cancelable: false,
        }
      )
    }
  }, [attempsCounter])

  useEffect(() => {
    if (keyboardState.length > Number(inputLenght)) {
      setKeyboardState(state => state.slice(0, -1))
      return
    }
    if (keyboardState.length === Number(inputLenght)) {
      if (keyboardState !== params.otp) {
        setOtpStatus('error')
        setAttempsCounter(attempsCounter - 1)
        return
      }
      getOtpInfo(params.phone)

      setOtpStatus('default')
    }
  }, [keyboardState])
  
  useEffect(() => {
    if (isSuccess) {
      setOtpInfo({
        phone: params.phone,
        otpCode: data.otpCode,
        userId: data.otpId
      })
      navigation.navigate('Password')
    }
  }, [data, isSuccess, isError])
  
  return (
    <OTPScreen
      inputProps={{
        value: keyboardState,
        length: inputLenght,
        status: otpStatus,
        errorCounter: `${attempsCounter}`
      }}
      keyboardProps={{
        keyboardChangeEffect: setKeyboardState,
        customButtonAction: () => { },
        type: 'custom-numeric',
        customButtonContent: 'Повторить через 2:59'
      }}
      isHideKeyboard={false}
      isLoading={isLoading}
    />
  );
};
