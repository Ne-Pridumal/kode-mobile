import React from 'react';
import { FlatList, View } from 'react-native'
import { styled, Theme } from '@shared/ui/theme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';


type TWrapperProps = {
  theme: Theme;
  bottomInset: number;
  topInset: number
};

const Wrapper = styled.View.attrs(
  ({ theme, bottomInset, topInset }: TWrapperProps) => ({
    contentContainerStyle: {
      flexGrow: 1,
      paddingBottom: bottomInset + theme.spacing(1),
      bottomInset,
      topInset
    },
  }),
) <TWrapperProps>`
  flex: 1;
  background: ${({ theme }) => theme.palette.background.primary};
`
const Field = styled(View)`
  background: ${({ theme }) => theme.palette.background.secondary};
  padding: 16px;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`

const ButtonWrapper = styled(View)`
  padding: 16px 16px 24px;
`

export type TTransactionTemplate = {
  cardField: React.ReactNode,
  inputField: React.ReactNode,
  transactionValueField: React.ReactNode,
  periodField?: React.ReactNode,
  meterValueField?: React.ReactNode,
  continueButtonField: React.ReactNode,
}

const renderItem = ({ item }: { item: React.ReactNode }) => {
  if (item) {
    return (
      <Field>
        {item}
      </Field>
    );
  }
  return null;
}
export const TransactionTemplate = ({ cardField, inputField, transactionValueField, periodField, meterValueField, continueButtonField }: TTransactionTemplate) => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <Wrapper bottomInset={bottom} topInset={top}>
      <FlatList
        renderItem={renderItem}
        data={[cardField, inputField, transactionValueField, periodField, meterValueField]}
      />
      <ButtonWrapper >
        {continueButtonField}
      </ButtonWrapper>
    </Wrapper>
  );
};
