import { IconMobile } from '@shared/ui/core/atoms/icons';
import React, { useState, useEffect } from 'react';
import { PhoneNumberPage } from './phone-number-page';
import { ActivityIndicator } from 'react-native'
import { mask, unMask } from 'react-native-mask-text';
import { useTheme } from 'styled-components';
import { addSnek, removeSnek } from '@entities/sneks';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { AuthStackParamsList } from '@features/auth-navigation/types';
import { setUserOtpAndPhone, useGetOTPCode } from '@entities/user-info';

export const PhoneNumberPageConnector = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthStackParamsList>>()
  const { palette } = useTheme()
  const [keyboardState, setKeyboardState] = useState<string>('')
  const [isHideKeyboard, setIsHideKeyboard] = useState<boolean>(true)
  const [isRightNumber, setIsRightNumber] = useState<boolean>(false)
  const [isAlarm, setIsAlam] = useState(false)
  const maskedVal = mask(keyboardState, '+7 (999) 999 99 99')
  const { isLoading, data, isSuccess, isError, mutateAsync: getOtpCode } = useGetOTPCode()
  useEffect(() => {
    if (maskedVal.length >= 18) {
      setKeyboardState(maskedVal)
      setIsRightNumber(true)
    }
    else {
      setIsRightNumber(false)
    }
    setIsAlam(false)
  }, [keyboardState])

  useEffect(() => {
    if (isSuccess) {
      const phone = '+' + unMask(keyboardState)
      setUserOtpAndPhone({
        phone: phone,
        otpCode: data.otpCode
      })

      navigation.navigate('OTP')
    }
    if (isError) {
      navigation.navigate('Error')
    }
  }, [isError, isSuccess, data])

  const buttonAction = () => {
    const snekId = Date.now()
    if (!isRightNumber) {
      addSnek({
        id: snekId,
        timer: 5000,
        title: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона',
        type: 'alarm',
      })
      setIsAlam(true)
      return
    }
    removeSnek({ title: 'Пожалуйста, убедитесь, что вы правильно ввели номер телефона' })
    const phone = '+' + unMask(keyboardState)
    getOtpCode(phone)
  }

  return (
    <PhoneNumberPage
      keyboardProps={{
        keyboardChangeEffect: setKeyboardState,
        onPressNumber: () => null,
        customButtonAction: () => { setIsHideKeyboard(true) },
      }}
      inputProps={{
        inputProps: {
          value: maskedVal,
          showSoftInputOnFocus: false,
          onPressIn: () => { setIsHideKeyboard(false) },
          onBlur: () => { setIsHideKeyboard(true) },
          selectTextOnFocus: false,
          editable: isHideKeyboard,
          style: { color: isAlarm ? '#FB6176' : palette.text.primary }
        },
        beforeIcon: <IconMobile color={isAlarm ? '#FB6176' : '#6C78E6'} />,
        afterIcon: isLoading && !isSuccess && <ActivityIndicator size={'small'} color={palette.accent.primary} />
      }}
      buttonAction={buttonAction}
      isHideKeyboard={isHideKeyboard}
    />
  );
};
