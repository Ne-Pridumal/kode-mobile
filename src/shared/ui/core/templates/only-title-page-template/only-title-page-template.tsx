import React from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';

type TWrapperProps = {
  theme: Theme;
  bottomInset: number;
};

const Wrapper = styled.View.attrs(
  ({ theme, bottomInset }: TWrapperProps) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: bottomInset + theme.spacing(1),
      bottomInset,
    },
  }),
) <TWrapperProps>`
  flex: 1;
  background: ${({theme}) => theme.palette.background.secondary};
  justify-content: center;
  align-items: center;
`;

export type TOnlyTitlePageTemplateProps = {
  title: React.ReactNode
}

export const OnlyTitlePageTemplate = ({ title }: TOnlyTitlePageTemplateProps) => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Wrapper bottomInset={bottom}>
      {title}
    </Wrapper>
  );
};
