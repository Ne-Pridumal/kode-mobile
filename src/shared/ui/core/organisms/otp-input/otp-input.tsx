import React from 'react';
import { View } from 'react-native'
import { styled } from '@shared/ui/theme'
import { OTPField } from '../../molecules';
import { Typography } from '../../atoms';

const Wrapper = styled(View)`
  align-items: center;
`

const OTPsWrapper = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing(1)}px;
`
const OTPWRapper = styled(View)`
  flex-direction: row;
  align-items: center;
  margin-right: 6px;
`

const OTPsDevider = styled(View)`
  width: 10px;
  height: 2px;
  margin-left: 6px;
  background: ${({ theme }) => theme.palette.content.tertiary};
`
const Text = styled(Typography)`
  color: ${({ theme }) => theme.palette.content.error};
`

export type TOTPInput = {
  value: string
  status: 'error' | 'default',
  length: '2' | '4' | '6',
  errorCounter?: string
}

export const OTPInput = ({ value, status, length, errorCounter }: TOTPInput) => {
  const mappedValue = value.split('');
  const fieldsArray = [...Array(Number(length))]
  const activeField = mappedValue.length
  return (
    <Wrapper>
      <OTPsWrapper>
        {fieldsArray.map((_, index) => {
          if (index === Number(length) / 2 - 1) {
            return (
              <OTPWRapper key={index}>
                <OTPField value={mappedValue[index] ?? ''} type={
                  status === 'error'
                    ? index === activeField || mappedValue[index] ? 'error' : 'disabled'
                    : index === mappedValue.length
                      ? 'focused'
                      : 'disabled'}
                />
                <OTPsDevider />
              </OTPWRapper>
            )
          }
          if (index === Number(length) - 1) {
            return (
              <OTPWRapper key={index}>
                <OTPField value={mappedValue[index] ?? ''} type={
                  status === 'error'
                    ? index === activeField || mappedValue[index] ? 'error' : 'disabled'
                    : index === mappedValue.length
                      ? 'focused'
                      : 'disabled'}
                />
              </OTPWRapper>
            )
          }
          return (
            <OTPWRapper key={index}>
              <OTPField value={mappedValue[index] ?? ''} type={
                status === 'error'
                  ? index === activeField || mappedValue[index] ? 'error' : 'disabled'
                  : index === mappedValue.length
                    ? 'focused'
                    : 'disabled'}
              />
            </OTPWRapper>
          )
        })}
      </OTPsWrapper>
      {status === 'error' && (
        <Text variant='caption2'>
          Неверный код. Осталось {errorCounter} попытки
        </Text>
      )}

    </Wrapper>
  );
};
