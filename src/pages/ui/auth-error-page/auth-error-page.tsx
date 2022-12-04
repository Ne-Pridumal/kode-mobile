import React from 'react';
import { styled } from '@shared/ui/theme'
import { Image, View, TouchableOpacity } from 'react-native';
import { BigButton, Typography } from '@shared/ui/core/atoms';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';

const Wrapper = styled(View)`
  position: relative;
  flex: 1;
  background: ${({ theme }) => theme.palette.background.secondary};
`
const SafeAreaWrapper = styled(SafeAreaView)`
  flex: 1;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 0 16px;
  align-items: center;
  justify-content: center;
`

const CrossWrapper = styled(TouchableOpacity)`
  position: absolute;
  top:${({ theme }) => theme.spacing(4)}px ;
  left: ${({ theme }) => theme.spacing(2)}px;
`
const ImageWrapper = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  width: 148px;
  height: 148px;
  border-radius: 1000px;
  overflow: hidden;
`
const Img = styled(Image)`
  width: 100%;
  height: 100%;
`
const Title = styled(Typography)`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing(2)}px;
`
const Subtitle = styled(Typography)`
  text-align: center;
`
const BigButtonWrapper = styled(View)`
  position: absolute;
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(3)}px;
  bottom: ${({ theme }) => theme.spacing(3)}px;
`

type TAuthPage = {
  buttonAction: () => void,
  crossAction: () => void
}

export const AuthErroPage = ({ buttonAction, crossAction }: TAuthPage) => {
  return (
    <Wrapper>
      <SafeAreaWrapper>
        <CrossWrapper activeOpacity={0.7} onPress={crossAction}>
          <AntDesign name="close" size={24} color="#ffffff" />
        </CrossWrapper>
        <ImageWrapper>
          <Img
            source={require('./error-image.png')}
          />
        </ImageWrapper>
        <Title variant='subtitle2'>
          Внимание
        </Title>
        <Subtitle variant='body15Regular'>
          Сервер временно недоступен. Пожалуйста, повторите попытку позднее.
        </Subtitle>
        <BigButtonWrapper>
          <BigButton
            title='Повторить'
            onPress={buttonAction}
          />
        </BigButtonWrapper>
      </SafeAreaWrapper>
    </Wrapper>
  );
};
