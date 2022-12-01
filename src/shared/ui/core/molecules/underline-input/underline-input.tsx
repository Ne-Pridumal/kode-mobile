import React from 'react';
import { styled } from '@shared/ui/theme'
import { TextInput, TextInputProps, View } from 'react-native';

const Wrapper = styled(View)`
  flex-direction: column;
  position: relative;
  align-items: center;
  height: 64px;
`
const BigInput = styled(TextInput)`
  width: 100%;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.size};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
  color: ${({ theme }) => theme.palette.text.primary};
`

const Line = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
`


export type TUnderlineInput = TextInputProps & {
  color: string
}

export const UnderlineInput = ({ color, value, ...inputProps }: TUnderlineInput) => {
  return (
    <Wrapper>
      <BigInput value={value} {...inputProps} />
      <Line style={{ backgroundColor: color }} />
    </Wrapper>
  );
};
