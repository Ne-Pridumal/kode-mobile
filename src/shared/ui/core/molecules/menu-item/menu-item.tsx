import React from 'react';
import { styled } from '@shared/ui/theme';
import { Typography } from '../../atoms';
import { GestureResponderEvent, TouchableOpacity, View } from 'react-native';

const ButtonWrapper = styled(TouchableOpacity)`
  width: 100%; 
  height: 68px;
  padding: 0 16px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row; 
`
const ButtonContent = styled(View)`
  flex:1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`

const Text = styled(Typography)`
  flex: 1;
`
const Border = styled(View)`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.palette.content.secondary};
`

export type TMenuItem = {
  icon: React.ReactNode,
  title: string
}

export type TMenuItemProps = TMenuItem & {
  onPress?: (e: GestureResponderEvent) => void
}

export const MenuItem: React.FC<TMenuItemProps> = ({ onPress, icon, title }) => {
  return (
    <ButtonWrapper
      onPress={onPress}
      activeOpacity={0.7}
    >
      {icon}
      <ButtonContent>
        <Text
          variant='body15Regular'
        >
          {title}
        </Text>
        <Border />
      </ButtonContent>
    </ButtonWrapper>
  );
};

