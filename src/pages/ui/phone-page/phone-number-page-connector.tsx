import { IconMobile } from '@shared/ui/core/atoms/icons';
import React, { useRef, useState } from 'react';
import { PhoneNumberPage } from './phone-number-page';
import { Keyboard, ActivityIndicator } from 'react-native'
import { mask } from 'react-native-mask-text';
import { useTheme } from 'styled-components';

export const PhoneNumberPageConnector = () => {
  const {palette} = useTheme()
  const [keyboardState, setKeyboardState] = useState<string>('')
  const [isHideKeyboard, setIsHideKeyboard] = useState<boolean>(true)
  const maskedVal = mask(keyboardState, '+7 (999) 999 99 99')
  return (
    <PhoneNumberPage
      keyboardProps={{
        keyboardChangeEffect: setKeyboardState,
        type: 'numeric',
        onPressNumber: () => null,
        customButtonAction: () => { setIsHideKeyboard(true) }
      }}
      inputProps={{
        inputProps: {
          value: maskedVal,
          showSoftInputOnFocus: false,
          onPressIn: () => { setIsHideKeyboard(false) },
          onBlur: () => { setIsHideKeyboard(true) }
        },
        beforeIcon: <IconMobile />,
        afterIcon: <ActivityIndicator size={'small'} color={palette.accent.primary} />
      }}
      buttonAction={() => null}
      isHideKeyboard={isHideKeyboard}
    />
  );
};
