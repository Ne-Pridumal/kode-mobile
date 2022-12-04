import React from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { TextInput, TextInputProps, View } from 'react-native';

const Wrapper = styled(View)`
  flex-direction: column;
  position: relative;
  align-items: center;
  height: 64px;
`
const BigInput = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.palette.accent.primary
}))`
  width: 100%;
  align-self: flex-start;
  font-family: ${({ theme }) => theme.typography.title.fontFamily};
  font-size: ${({ theme }) => theme.typography.title.size};
  line-height: ${({ theme }) => theme.typography.title.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.title.letterSpacing};
  color: ${({ theme }) => theme.palette.text.primary};
`
type TLine = {
  theme: Theme,
  underlineColor: 'alarm' | 'focused',
}

const Line = styled(View) <TLine>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: ${({ theme, underlineColor }: TLine) => (
    underlineColor === 'alarm'
      ? theme.palette.text.secondary
      : theme.palette.accent.primary)};
`


export type TUnderlineInput = TextInputProps & {
  underlineColor: 'alarm' | 'focused',
}

export const UnderlineInput = ({ underlineColor, value, ...inputProps }: TUnderlineInput) => {
  return (
    <Wrapper>
      <BigInput
        value={value}
        {...inputProps} />
      <Line underlineColor={underlineColor} />
    </Wrapper>
  );
};
