import React from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { View } from 'react-native'
import { Typography } from '../../atoms';

const Wrapper = styled(View)`
  position: relative;
  width: 40px;
  height: 48px;
  background: ${({ theme }) => theme.palette.content.secondary};
  justify-content: center;
  align-items: center;
  border-radius: 12px;
`

type TOTPContent = {
  theme: Theme,
  type: 'focused' | 'error' | 'disabled'
}

const Text = styled(Typography) <TOTPContent>`
  color: ${({ theme, type }: TOTPContent) => (
    type === 'error'
      ? theme.palette.content.error
      : theme.palette.text.primary
  )};
`
const Line = styled(View) <TOTPContent>`
  position: absolute;
  bottom: 10px;
  justify-self: flex-end;
  width: 24px;
  height: 0px;
  border-radius: 2px;
  border: 2px solid ${({ theme, type }: TOTPContent) => (
    type === 'error'
      ? theme.palette.content.error
      : theme.palette.accent.primary
  )};
`


export type TOTPField = {
  value: string,
  type: 'focused' | 'error' | 'disabled'
}

export const OTPField = ({ type, value = '' }: TOTPField) => {
  if (value !== '') {
    return (
      <Wrapper>
        <Text type={type} variant='subtitle1'>
          {value}
        </Text>
      </Wrapper>
    )
  }
  if (type === 'focused') {
    return (
      <Wrapper>
        <Line type={type} />
      </Wrapper>
    )
  }
  if (type === 'error') {
    return (
      <Wrapper>
        <Line type={type} />
      </Wrapper>
    )
  }
  return (
    <Wrapper />
  )
};
