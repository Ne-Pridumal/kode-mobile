import React from 'react';
import { CustomKeyboardTemplate } from '../../templates';

export type TCustomKeyboardInputPage = {
  content: React.ReactNode,
  keyboard: React.ReactNode,
  isHideKeyboard: boolean
}

export const CustomKeyboardInputPage = ({content, keyboard, isHideKeyboard }: TCustomKeyboardInputPage) => {
  return (
    <CustomKeyboardTemplate
      keyboard={keyboard}
      content={content}
      isHidden={isHideKeyboard}
    />
  );
};
