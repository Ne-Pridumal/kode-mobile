import React from 'react';
import { useWindowDimensions, View, ViewProps } from 'react-native';
import { Theme, styled } from '@shared/ui/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SneksList } from '@entities/sneks';

type TSnekWrapper = {
  theme: Theme,
  width: number
}

const Wrapper = styled(View)`
  flex: 1;
  position: relative;
`
const SneksWrapper = styled(View) <TSnekWrapper>`
  position: absolute;
  z-index: 99999;
  width: ${({ theme, width }: TSnekWrapper) => width}px;
`
const ContentWrapper = styled(View)`
  position: relative;
  z-index: 1;
  flex: 1;
`

type Props = {
  children: React.ReactNode
}

export const SnekProvider = ({ children }: Props) => {
  const { width } = useWindowDimensions()
  const { top } = useSafeAreaInsets()
  return (
    <Wrapper>
      <SneksWrapper width={width - 16} style={{ left: 8, top: top + 5 }}>
        <SneksList />
      </SneksWrapper>
      <ContentWrapper>
        {children}
      </ContentWrapper>
    </Wrapper>
  );
};
