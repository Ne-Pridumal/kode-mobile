import React from 'react';
import { View, Image } from 'react-native'
import { styled } from '@shared/ui/theme'
import { BigButton, Typography } from '@shared/ui/core/atoms';
import { IconOk } from '@shared/ui/core/atoms/icons';

const Wrapper = styled(View)`
  position: relative;
  flex: 1;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.secondary};
`
const ImageWrapper = styled(View)`
  margin-bottom: ${({ theme }) => theme.spacing(4)}px;
  min-width: 148px;
  min-height: 148px;
  border-radius: 1000px;
  overflow: hidden;
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


type TCompleteAuthPage = {
  buttonAction: () => void
}

export const CompleteAuthPage = ({ buttonAction }: TCompleteAuthPage) => {
  return (
    <Wrapper>
      <ImageWrapper>
        <Image
          source={require('./ok.png')}
        />
      </ImageWrapper>
      <Title variant='subtitle2'>
        Все готово
      </Title>
      <Subtitle variant='body15Regular'>
        Теперь вы можете использовать мобильное приложение Kode bank
      </Subtitle>
      <BigButtonWrapper>
        <BigButton
          title='Продолжить'
          onPress={buttonAction}
        />
      </BigButtonWrapper>
    </Wrapper>
  );
};
