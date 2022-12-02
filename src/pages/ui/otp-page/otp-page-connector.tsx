import React, { useState } from 'react';
import { OTPScreen } from './otp-page';

export const OTPPageConnector = () => {
  const [keyboardState, setKeyboardState] = useState<string>('')
  const [isHideKeyboard, setIsHideKeyboard] = useState<boolean>(false)
  return (
    <OTPScreen
      inputProps={{
        value: keyboardState,
        length: '4',
        status: 'default',
      }}
      keyboardProps={{
        keyboardChangeEffect: setKeyboardState,
        customButtonAction: () => { setIsHideKeyboard(true) },
        type: 'custom-numeric',
        customButtonContent: 'Повторить через 2:59'
      }}
      isHideKeyboard={isHideKeyboard}
    />
  );
};
