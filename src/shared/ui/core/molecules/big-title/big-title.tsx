import React from 'react';
import { Typography } from '../../atoms';
import { styled, Theme } from '@shared/ui/theme'

type TTextProps = {
  theme: Theme,
  marginBottom: number,
  marginTop: number
}

const Text = styled(Typography)`
  padding: 0 ${({ theme }) => theme.spacing(2)}px;
  margin-top: ${({ theme, marginTop }: TTextProps) => theme.spacing(marginTop)}px;
  margin-bottom: ${({ theme, marginBottom }: TTextProps) => theme.spacing(marginBottom)}px;
`

export type TBigTitle = {
  title: string,
  marginBottom?: number,
  marginTop?: number,
}

export const BigTitle = ({ title, marginBottom, marginTop }: TBigTitle) => {
  return (
    <Text
      marginBottom={marginBottom ?? 0}
      marginTop={marginTop ?? 0}
      variant='title'>
      {title}
    </Text>
  );
};

