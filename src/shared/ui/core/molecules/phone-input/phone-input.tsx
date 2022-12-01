import React from 'react';
import { TextInput, TextInputProps, View, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styled, Theme, } from '@shared/ui/theme'
import { IconCross } from '../../atoms/icons';
import { mask } from 'react-native-mask-text'

const Gap = styled(View)`
  width: 16px;
  height: 16px;
`

const Wrapper = styled(View)`
  overflow: hidden;
  height: 52px;
  flex-direction: row;
  background: ${({theme}) => theme.palette.content.secondary};
  border-radius: 26px;
  align-items: center;
  padding: 14px 16px 14px 24px;
`

const IconWrapper = styled(View)`
  overflow: hidden;
`

type TCustomInput = {
  theme: Theme,
  isWrongNumber: boolean
}

const CustomInput = styled.TextInput.attrs(
  ({ theme, isWrongNumber }: TCustomInput) => ({
    placeholderTextColor: isWrongNumber
      ? theme.palette.content.error
      : theme.palette.content.primary,
  })
) <TCustomInput>`
  color: ${({ theme, isWrongNumber }: TCustomInput) => (
    isWrongNumber
      ? theme.palette.content.error
      : theme.palette.content.primary
  )};
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  letter-spacing: ${({ theme }) => theme.typography.body15Regular.letterSpacing};
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  flex: 1;
`

export type TPhoneInput = TextInputProps & {
  icon: React.ReactNode,
  onPress: (e: GestureResponderEvent) => void,
  isWrongNumber: boolean
}

export const PhoneInput = ({ icon, onPress, value, isWrongNumber, ...inputProps }: TPhoneInput) => {
  const number = mask(value ?? '', '+7 999 999 99 99')
  return (
    <Wrapper>
      <IconWrapper>
        {icon}
      </IconWrapper>
      <Gap />
      <CustomInput
        {...inputProps}
        value={number}
        keyboardType='number-pad'
        isWrongNumber={isWrongNumber}
      />
      {value && (
        <>
          <Gap />
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
          >
            <IconCross />
          </TouchableOpacity>
        </>
      )}
    </Wrapper>
  );
};
