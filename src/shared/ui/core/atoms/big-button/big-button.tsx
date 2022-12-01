import React from 'react';
import { styled } from '@shared/ui/theme'
import { TouchableOpacity, GestureResponderEvent } from 'react-native';
import { Typography } from '../typography';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';

const ButtonContainer = styled(TouchableOpacity)`
  width: 100%;
  min-width: 288px;
  min-height: 52px;
  justify-content: center;
  align-items: center;
  background: #6C78E6;
  border-radius: 26px;
`
const Text = styled(Typography)`
  color: #FFFFFF;
`

export type TBigButton = {
  title: string,
}
type TBigButtonProps = TBigButton & {
  onPress?: (e: GestureResponderEvent) => void
}

export const BigButton: React.FC<TBigButtonProps> = ({ title, onPress }) => {
  return (
    <ButtonContainer activeOpacity={0.7} onPress={onPress}>
      <Text variant='button'>
        {title}
      </Text>
    </ButtonContainer>
  );
};
