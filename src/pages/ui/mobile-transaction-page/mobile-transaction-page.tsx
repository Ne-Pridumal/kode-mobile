import { MobileTransactionPage, TMobileTransactionPage } from '@shared/ui/core/pages';
import React from 'react';

export type TMobileTransactionScreen = TMobileTransactionPage & {

}

export const MobileTransactionScreen = (transactionProps: TMobileTransactionPage) => {
  return (
    <MobileTransactionPage
      {...transactionProps}
    />
  );
};
