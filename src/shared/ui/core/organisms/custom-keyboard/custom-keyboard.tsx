import React, { Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { GestureResponderEvent, TouchableOpacity, useWindowDimensions, View } from 'react-native';
import { styled, Theme } from '@shared/ui/theme'
import { Feather } from '@expo/vector-icons';
import { Typography } from '@shared/ui/core/atoms';

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

type TKeyWrapper = {
  theme: Theme
  width: number,
  height: number
}

const KeyWrapper = styled(TouchableOpacity) <TKeyWrapper>`
  width: ${({ width }: TKeyWrapper) => width}px;
  height: ${({ height }: TKeyWrapper) => height}px;
  min-height: 68px;
  min-width: 96px;
  align-items: center;
  justify-content: center;
`
const Key = styled(View)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`
const KeyText = styled(Typography)`
  
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

export const CustomKeyboard = ({ onPressNumber, keyboardChangeEffect, customButtonAction, customButtonContent }: TCustomKeyboard) => {
  const { width } = useWindowDimensions()
  const [value, setValue] = useState('')
  const addKeyAction = (e: GestureResponderEvent, key: unknown) => {
    e.preventDefault()
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
          {row.map((key, keyIndex) => (
            <KeyWrapper
              activeOpacity={0.7}
              height={68}
              width={width / 3 - 32}
              key={`${rowIndex}${keyIndex}`}
              onPress={(e) => {
                `${rowIndex}${keyIndex}` !== '30'
                  ? addKeyAction(e, key)
                  : customButtonAction()
              }}
            >
              <Key>
                {typeof key === 'number' || typeof key === 'string'
                  ?
                  (
                    <KeyText variant={`${rowIndex}${keyIndex}` !== '30' ? 'largeTitle' : 'caption1'}> {/* поправить потом */}
                      {`${rowIndex}${keyIndex}` !== '30'
                        ? key
                        : customButtonContent ?? key}
                    </KeyText>
                  )
                  :
                  (key)
                }
              </Key>
            </KeyWrapper>
          ))}
        </RowWrapper>
      ))}
    </Wrapper>
  );
};
