import React from 'react';
import { styled } from '@shared/ui/theme'
import { Theme } from '@react-navigation/native';

type TWrapperProps = {
  theme: Theme,
  backgroundColor: string,
}

const Wrapper = styled.View.attrs(
  ({ theme, backgroundColor }: TWrapperProps) => ({
    contentContainerStyle: {
      backgroundColor
    }
  })
) <TWrapperProps>`
  overflow: hidden;
  border-radius: 1000px;
  height: 40px;
  width: 40px;
  align-items: center;
  justify-content: center;
`
const ImageContainer = styled.Image`
  min-height: 24px;
  min-width: 24px;
`

export type TUriIcon = {
  backgroundColor?: string,
  uri: string,
  size?: number | string
}


export const UriIcon = ({ backgroundColor, uri, size }: TUriIcon) => {
  return (
    <Wrapper backgroundColor={backgroundColor ?? 'transparent'}>
      <ImageContainer
        style={{ width: size, height: size }}
        source={{ uri }}
      />
    </Wrapper>
  );
};
