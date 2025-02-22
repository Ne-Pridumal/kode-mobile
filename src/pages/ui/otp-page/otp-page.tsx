import { CustomKeyboard, OTPInput, TCustomKeyboard, TOTPInput } from '@shared/ui/core/organisms';
import { OTPPage } from '@shared/ui/core/pages';
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'
import { Typography } from '@shared/ui/core/atoms';
import {  ActivityIndicator } from 'react-native'
import { useTheme } from 'styled-components';

const OTPWrapper = styled(View)`
  width: 100%;
  height: 100%;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.primary};
`
const Text = styled(Typography)`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(3)}px;
  text-align: center;
`

type TOTPScreen = {
  keyboardProps: TCustomKeyboard,
  inputProps: TOTPInput,
  isHideKeyboard: boolean,
  isLoading: boolean
}

export const OTPScreen = ({ isHideKeyboard, inputProps, keyboardProps, isLoading }: TOTPScreen) => {
  if(isLoading){
    return (
      <OTPWrapper>
        <ActivityIndicator size='large' color='#ffffff'/>
      </OTPWrapper>
    )
  }

  return (
    <OTPPage
      isHideKeyboard={isHideKeyboard}
      keyboard={<CustomKeyboard {...keyboardProps} />}
      otpInput={
        <OTPWrapper>
          <Text variant='body15Regular'>
            На ваш номер отправлено
            SMS с кодом подтверждения.
          </Text>
          <OTPInput {...inputProps} />
        </OTPWrapper>
      }
    />
  );
};
