import React from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { Dimensions, TouchableOpacity, View } from 'react-native'
import { Typography } from '../../atoms';
import { Entypo } from '@expo/vector-icons';

type TAlertPopUpWrapper = {
  theme: Theme,
  type: 'success' | 'alarm',
}

const Button = styled(TouchableOpacity)`
  width: 100%;
  z-index: 99999;
`
const Wrapper = styled(View) <TAlertPopUpWrapper>`
  margin: auto;
  width: 100%;
  min-height: 62px;
  border-radius: 13px;
  padding: 16px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme, type }) => type === 'success' ? theme.palette.button.primary : theme.palette.content.error};
`

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.primary};
`

export type TAlertPopUp = {
  type: 'success' | 'alarm',
  title: string,
  closeAction: () => void
}

export const AlertPopUp = ({ type, title, closeAction }: TAlertPopUp) => {
  return (
    <Button
      activeOpacity={0.7}
      onPress={closeAction}
    >
      <Wrapper
        type={type}
        style={{
          borderRadius: 13
        }}
      >
        <Text variant='body15Regular'>
          {title}
        </Text>
        <Entypo name="cross" size={15} color="white" />
      </Wrapper>
    </Button>
  );
};
