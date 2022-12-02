import React from 'react';
import { styled } from '@shared/ui/theme'
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Typography } from '../typography';

const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  min-width: 288px;
  min-height: 52px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.button.primary};
  border-radius: 1000px;
`
const Text = styled(Typography)`
`

export type TBigButton = {
  title: string,
}
type TBigButtonProps = TBigButton & {
  onPress?: (e: GestureResponderEvent) => void
}

export const BigButton = ({ title, onPress }: TBigButtonProps) => {
  return (
    <ButtonContainer activeOpacity={0.7} onPress={onPress}>
      <Text variant='button'>
        {title}
      </Text>
    </ButtonContainer>
  );
};
