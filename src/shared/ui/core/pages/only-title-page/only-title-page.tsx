import React, { ComponentProps } from 'react';
import { BigTitle } from '../../molecules';
import { OnlyTitlePageTemplate } from '../../templates';

type TOnlyTitlePage = {
  title: ComponentProps<typeof BigTitle>,
}

export const OnlyTitlePage = ({ title }: TOnlyTitlePage) => {
  return (
    <OnlyTitlePageTemplate title={<BigTitle {...title} />} />
  );
};

