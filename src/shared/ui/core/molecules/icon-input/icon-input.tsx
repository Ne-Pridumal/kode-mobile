import React from 'react';
import { styled } from '@shared/ui/theme'
import { View, TextInput, TextInputProps } from 'react-native'

const Wrapper = styled(View)`
  background: ${({ theme }) => theme.palette.content.primary};
  border-radius: 10000px;
  min-width: 288px;
  min-height: 52px;
  width: 100%;
  height: 100%;
  padding: 14px 16px 14px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const BeforeIconWrapper = styled(View)`
  max-width: 24px;
  max-height: 24px;
  width: 100%;
  height: 100%;
  margin-right: ${({ theme }) => theme.spacing(2)}px;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`
const Input = styled(TextInput)`
  flex: 1;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-style: normal;
  font-size:${({ theme }) => theme.typography.body15Regular.size} ;
  line-height: ${({ theme }) => theme.typography.body15Regular.lineHeight};
  letter-spacing: ${({ theme }) => theme.typography.body15Regular.letterSpacing};
`
const AfterIconWrapper = styled(View)`
  max-width: 24px;
  max-height: 24px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`


export type TIconInput = {
  beforeIcon: React.ReactNode
  inputProps: TextInputProps,
  afterIcon?: React.ReactNode
}

export const IconInput = ({ beforeIcon, inputProps, afterIcon }: TIconInput) => {
  return (
    <Wrapper>
      <BeforeIconWrapper>
        {beforeIcon}
      </BeforeIconWrapper>
      <Input {...inputProps} />
      {afterIcon && (
        <AfterIconWrapper>
          {afterIcon}
        </AfterIconWrapper>
      )}
    </Wrapper>
  );
};
