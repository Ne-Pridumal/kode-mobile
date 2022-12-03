import React, { Dispatch, ReactNode, SetStateAction } from 'react';
import { GestureResponderEvent, View } from 'react-native';
import { styled, } from '@shared/ui/theme'
import { Feather } from '@expo/vector-icons';
import { KeyboardKey } from './keyboard-key';

type TKeyboardArray = Array<Array<{
  onPress?: () => void,
  char: ReactNode
}>>

const Wrapper = styled(View)`
  background: ${({ theme }) => theme.palette.background.primary};
  padding: 14px 16px;
`
const RowWrapper = styled(View)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const DelIcon = <Feather name="delete" size={24} color="white" />
const numericArrary = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  ['Отмена', 0, DelIcon]
]

export type TCustomKeyboard = {
  onPressNumber?: (e: GestureResponderEvent) => void,
  keyboardChangeEffect: Dispatch<SetStateAction<string>>,
  type: 'numeric' | 'custom-numeric' | 'custom-keyboard'
  keyboardArray?: TKeyboardArray,
  customButtonAction: () => void
  customButtonContent?: string
}

const CustomKeyboardComponent = ({ onPressNumber, keyboardChangeEffect, customButtonAction, customButtonContent }: TCustomKeyboard) => {
  const addKeyAction = (e: GestureResponderEvent, key: ReactNode) => {
    const keyType = typeof key
    if (keyType === 'number' || keyType === 'string') {
      keyboardChangeEffect(state => state + `${key}`)
    }
    if (key === DelIcon) {
      keyboardChangeEffect((state) => state.slice(0, -1))
    }
  }
  return (
    <Wrapper>
      {numericArrary.map((row, rowIndex) => (
        <RowWrapper key={rowIndex}>
          {row.map((key: ReactNode, keyIndex) => (
            <KeyboardKey
              key={`${rowIndex}${keyIndex}`}
              keyAction={addKeyAction}
              isCustomKey={`${rowIndex}${keyIndex}` === '30' ? true : false}
              keyContent={
              `${rowIndex}${keyIndex}` === '30' 
                ? customButtonContent ? customButtonContent : key 
                : key}
              customKeyAction={customButtonAction}
            />
          ))}
        </RowWrapper>
      ))}
    </Wrapper>
  );
};

const areEqual = (prevProps: TCustomKeyboard, nextProps: TCustomKeyboard) => {
  if (prevProps.keyboardChangeEffect === nextProps.keyboardChangeEffect
    || prevProps.customButtonAction === nextProps.customButtonAction
    || prevProps.customButtonContent === nextProps.customButtonContent
  ) {
    return true
  }
  return false
}
export const CustomKeyboard = React.memo(CustomKeyboardComponent, areEqual)
