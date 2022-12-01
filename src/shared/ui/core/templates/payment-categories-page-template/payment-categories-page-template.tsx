import React from 'react';
import { View } from 'react-native';
import { styled, Theme } from '@shared/ui/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { theme } from '@storybook/react-native/dist/preview/components/Shared/theme';

const Flex1 = styled.View`
  flex: 1;
`;

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
  background: ${({ theme }) => theme.palette.background.secondary};
`
const TitleWrapper = styled(View)`
  background: ${({ theme }) => theme.palette.background.primary};
  padding-top: 67px;
`


export type TPaymentCategoriesPageTemplate = {
  title: React.ReactNode,
  list: React.ReactNode,
}


export const PaymentCategoriesPageTemplate = ({ title, list }: TPaymentCategoriesPageTemplate) => {
  const { bottom } = useSafeAreaInsets();
  return (
    <Wrapper bottomInset={bottom} >
      <TitleWrapper>
        {title}
      </TitleWrapper>
      {list}
    </Wrapper>
  );
};

