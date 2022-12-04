import React from 'react';
import { View } from 'react-native';
import { FieldTitle } from '../../molecules';
import { TransactionTemplate } from '../../templates';

export type TMobileTransactionPage = {
  card: React.ReactNode,
  input: React.ReactNode,
  transactionValue: React.ReactNode,
  continueButton: React.ReactNode,
}

export const MobileTransactionPage = ({ card, input, continueButton, transactionValue }: TMobileTransactionPage) => {
  return (
    <TransactionTemplate
      cardField={
        <View>
          <FieldTitle title='Карта для оплаты' />
          {card}
        </View>
      }
      inputField={input}
      continueButtonField={continueButton}
      transactionValueField={
        <View>
          <FieldTitle title='Сумма' />
          {transactionValue}
        </View>
      }
    />
  );
};
