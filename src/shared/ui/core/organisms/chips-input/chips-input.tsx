import React from 'react';
import { styled, Theme } from '@shared/ui/theme'
import { View, TextInputProps } from 'react-native'
import { UnderlineInput } from '../../molecules';
import { ChipsList } from '../chips-list';
import { TChip, Typography } from '../../atoms';

const Wrapper = styled(View)`
`
const Gap = styled(View)`
  height: 8px;
`

const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`

export type TChipsInput = TextInputProps & {
  list: TChip[],
  showCashback: boolean
  cashback?: number,
  cashbackPercent?: number,
  underlineColor: 'alarm' | 'focused',
}

export const ChipsInput = ({ underlineColor, list, cashback = 0, cashbackPercent = 0, showCashback, ...inputProps }: TChipsInput) => {
  return (
    <Wrapper>
      <UnderlineInput keyboardType='number-pad' underlineColor={underlineColor} {...inputProps} />
      <Gap />
      {showCashback ?
        <Text variant='caption1'>
          {`Ваш кешбек составит ${cashbackPercent}% - ${cashback} ₽`}
        </Text>
        :
        <ChipsList
          list={list}
          direction='horizontal'
        />
      }
    </Wrapper>
  );
};
