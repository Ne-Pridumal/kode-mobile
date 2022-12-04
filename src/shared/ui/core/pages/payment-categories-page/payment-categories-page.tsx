import React, { ComponentProps } from 'react';
import { PaymentCategoriesPageTemplate } from '../../templates';

type TPaymentCategoriesPage = {
  title: React.ReactNode,
  list: React.ReactNode
}

export const PaymentCategoriesPage = ({ title, list }: TPaymentCategoriesPage) => {
  return (
    <PaymentCategoriesPageTemplate
      title={title}
      list={list} />
  );
};

