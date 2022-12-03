import React, { ReactNode } from 'react';
import { View, TouchableOpacity, useWindowDimensions, GestureResponderEvent } from 'react-native'
import { styled, Theme } from '@shared/ui/theme'
import { Typography } from '../../atoms';



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
  padding: 0 8px
`
const Key = styled(View)`
  width: 100%;
  height: 100%;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`
const KeyText = styled(Typography)`
  text-align: center;
`

type TKeyboardKey = {
  keyContent: ReactNode,
  isCustomKey: boolean,
  keyAction: (e: GestureResponderEvent, key: React.ReactNode) => void,
  customKeyAction?: (e: GestureResponderEvent, key: React.ReactNode) => void
}

const KeyboardKeyComponent = ({ keyContent, isCustomKey, customKeyAction, keyAction }: TKeyboardKey) => {
  const { width } = useWindowDimensions()
  return (
    <KeyWrapper
      activeOpacity={0.7}
      height={68}
      width={width / 3 - 32}
      onPress={(e) => {
        isCustomKey
          ? customKeyAction ? customKeyAction(e, keyContent) : keyAction(e, keyContent)
          : keyAction(e, keyContent)
      }}
    >
      <Key>
        {typeof keyContent === 'number' || typeof keyContent === 'string'
          ?
          (
            <KeyText variant={
              !isCustomKey
                ? 'largeTitle'
                : 'caption1'}>
              {keyContent}
            </KeyText>
          )
          :
          (keyContent)
        }
      </Key>
    </KeyWrapper>
  );
};


const areEqual = (prevProps: TKeyboardKey, nextProps: TKeyboardKey) => {
  if (prevProps.keyContent === nextProps.keyContent
    || prevProps.customKeyAction === nextProps.customKeyAction
    || prevProps.keyAction === nextProps.customKeyAction
  ) {
    return true
  }
  return false
}

export const KeyboardKey = React.memo(KeyboardKeyComponent, areEqual)
