import React from 'react';
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { styled } from '@shared/ui/theme'
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';
import { Typography } from '../typography';

const ChipWrapper = styled(TouchableOpacity)`
  min-width: 63px;
  height: 28px;
  background: ${({theme}) => theme.palette.content.secondary};
  opacity: 0.5;
  border-radius: 14px;
  padding: 6px 15px;
  color: ${({theme}) => theme.palette.text.secondary};
`
const Text = styled(Typography)``

export type TChip = {
  title: string,
  onPress: (e: GestureResponderEvent) => void
}

export const Chip= ({ title, onPress }: TChip) => {
  return (
    <ChipWrapper activeOpacity={0.7} onPress={onPress}>
      <Text variant='caption1'>
        {title} ₽
      </Text>
    </ChipWrapper>
  );
};
