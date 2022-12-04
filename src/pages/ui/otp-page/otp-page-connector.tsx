import { $userInfo, setUserInfo, useGetOTPCode } from '@entities/user-info';
import { AuthStackParamsList } from '@features/auth-navigation/types';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useState, useEffect } from 'react';
import { OTPScreen } from './otp-page';
import { Alert } from 'react-native'
import { useStore } from 'effector-react';
import { useCountdown } from '@features/countdown';

const TIME = 3 * 60 * 1000 //3min

export const OTPPageConnector = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>()
  const { otpCode, phone } = useStore($userInfo)
  const [keyboardState, setKeyboardState] = useState<string>('')
  const [inputLenght, setInputLenght] = useState<'2' | '4' | '6'>('4')
  const [otpStatus, setOtpStatus] = useState<'default' | 'error'>('default')
  const { mutateAsync: getOtpInfo, isLoading, data, isSuccess, isError } = useGetOTPCode()
  const [attempsCounter, setAttempsCounter] = useState<number>(5)
  const [timer, setTimer] = useState(new Date(Date.now() + TIME))
  const { minutes, seconds } = useCountdown(timer.getTime())

  const customButtonAction = () => {
    if (minutes <= 0) {
      getOtpInfo(phone)
      setOtpStatus('default')
      setTimer(new Date(Date.now() + TIME))
    }
  }

  useEffect(() => {
    if (attempsCounter <= 0) {
      Alert.alert(
        'Вы ввели неверно код 5 раз',
        'Данная сессия авторизации будет сброшена!',
        [
          {
            text: 'Выход',
            onPress: () => navigation.navigate('Phone'),
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
      if (keyboardState !== otpCode) {
        setOtpStatus('error')
        setAttempsCounter(attempsCounter - 1)
        return
      }
      getOtpInfo(phone)

      setOtpStatus('default')
    }
  }, [keyboardState])

  useEffect(() => {
    if (isSuccess && keyboardState === data.otpCode) {
      setUserInfo({
        phone: phone,
        otpCode: data.otpCode,
        userId: data.otpId
      })
      navigation.navigate('Password')
    }
    if (isError) {
      navigation.navigate('Error')
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
        customButtonAction: customButtonAction,
        customButtonContent: minutes >= 0 ? `Повторить через ${minutes}:${seconds < 10 ? '0' + seconds : seconds}` : 'Выслать код повторно'
      }}
      isHideKeyboard={false}
      isLoading={isLoading}
    />
  );
};
