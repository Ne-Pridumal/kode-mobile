import React, { ReactNode } from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { View } from 'react-native'

const Wrapper = styled(View)`
  postion: relative;
  flex: 1;
  overflow: hidden;
  align-items: center;
  justify-content: space-between;
`
const ContentWrapper = styled(View)`
  flex: 1;
  width: 100%;
  position: relative;
  overflow: hidden;
`

type TKeyboardWrapper = {
  theme: Theme,
  isHidden: boolean
}

const KeyboardWrapper = styled(View) <TKeyboardWrapper>`
  postion: relative;
  bottom: 0;
  left: 0;
  height: ${({ isHidden }: TKeyboardWrapper) => isHidden ? '0px' : 'auto'};
  overflow: hidden;
`


type TCustomKeyboardTemplate = {
  keyboard: ReactNode,
  content: ReactNode,
  isHidden: boolean
}

export const CustomKeyboardTemplate = ({ keyboard, content, isHidden }: TCustomKeyboardTemplate) => {
  return (
    <Wrapper>
      <ContentWrapper >
        {content}
      </ContentWrapper>
      <KeyboardWrapper isHidden={isHidden}>
        {keyboard}
      </KeyboardWrapper>
    </Wrapper>
  );
};
