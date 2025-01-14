import React from 'react';
import { styled } from '@shared/ui/theme'
import { View, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native'
import { BigButton, Typography } from '@shared/ui/core/atoms';
import { IconInput, TIconInput } from '@shared/ui/core/molecules';
import { IconCross } from '@shared/ui/core/atoms/icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Wrapper = styled(KeyboardAvoidingView)`
  flex: 1;
  background: ${({ theme }) => theme.palette.background.secondary};
`
const SafeAreaWrapper = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 10px 16px 24px 16px;
  align-items: center;
  justify-content: space-between;
`
const CrossWrapper = styled(TouchableOpacity)`
  position: absolute;
  top:${({ theme }) => theme.spacing(4)}px ;
  left: ${({ theme }) => theme.spacing(2)}px;
`
const ImageWrapper = styled(View)`
  width: 100%;
  height: 100%;
  max-width: 90px;
  max-height: 101px;
  top: 55px;
`
const Img = styled(Image)`
  width: 100%;
  height: 100%;
`
const Title = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`
const InputWrapper = styled(View)`
  width: 100%;
  height: 52px;
  align-items: center;
`
const BigButtonWrapper = styled(View)`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
`

type TPasswordPage = {
  inputProps: TIconInput,
  crossAction: () => void,
  buttonAction: () => void
}

export const PasswordPage = ({ buttonAction, inputProps, crossAction }: TPasswordPage) => {
  return (
    <Wrapper>
      <SafeAreaWrapper>
        <CrossWrapper activeOpacity={0.7} onPress={crossAction}>
          <AntDesign name="close" size={24} color="#ffffff" />
        </CrossWrapper>
        <ImageWrapper>
          <Img source={require('./logo.png')} />
        </ImageWrapper>
        <InputWrapper>
          <Title variant='body15Regular'>
            Введите пароль
          </Title>
          <IconInput {...inputProps} />
        </InputWrapper>
        <BigButtonWrapper>
          <BigButton onPress={buttonAction} title='Войти' />
        </BigButtonWrapper>
      </SafeAreaWrapper>
    </Wrapper>
  );
};
