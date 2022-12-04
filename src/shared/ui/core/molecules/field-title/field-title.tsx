import React from 'react';
import { View } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Typography } from '../../atoms';

const Wrapper = styled(View)`
  height: 50px;
  background: ${({theme}) => theme.palette.background.secondary};
`
const Text = styled(Typography)`
  color: ${({theme}) => theme.palette.text.tertiary};
`

export type TFieldTitle = {
  title: string,
}

export const FieldTitle: React.FC<TFieldTitle> = ({ title }) => {
  return (
    <Wrapper>
      <Text variant='body15Semibold'>
        {title}
      </Text>
    </Wrapper>
  );
};
