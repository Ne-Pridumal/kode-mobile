import React from 'react';
import { CustomKeyboardTemplate } from '../../templates';

type TOTPPage = {
  otpInput: React.ReactNode,
  keyboard: React.ReactNode,
  isHideKeyboard: boolean
}

export const OTPPage = ({keyboard, otpInput, isHideKeyboard}: TOTPPage) => {
  return (
    <CustomKeyboardTemplate
      keyboard={keyboard}
      isHidden={isHideKeyboard}
      content={otpInput}
      />
  );
};
