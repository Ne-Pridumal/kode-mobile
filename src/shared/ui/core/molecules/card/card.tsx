import React from 'react';
import { View, TouchableOpacity, Image } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Typography } from '../../atoms';

const Button = styled(TouchableOpacity)`
  height: 72px;
  width: 100%;
  padding: 17px 0 16px 0;
`
const CardImage = styled(Image)`
  width: 40px;
  height: 28px;
  border-radius: 3px;
`
const Wrapper = styled(View)`
  flex-direction: row;
   justify-content: flex-start;
  align-items: center;
`
const InfoContainer = styled(View)`
  flex: 1;
  justify-content: flex-start;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
  height: 100%;
`
const ActionIconWrapper = styled(View)`
  justify-self: flex-end;
`
const TextTitle = styled(Typography)`
  margin-bottom: 3px;
`
const TextCache = styled(Typography)`

`

export type TCard = {
  title: string,
  imageUri?: string,
  cache: string,
  onPress?: () => void,
  actionIcon: React.ReactNode
}

export const Card = ({ imageUri, cache, title, actionIcon, onPress }: TCard) => {
  return (
    <Button onPress={onPress}>
      <Wrapper>
        <CardImage source={imageUri ? { uri: imageUri } : require('./default-card-image.png')} />
        <InfoContainer>
          <TextTitle variant='body15Regular'>
            {title}
          </TextTitle>
          <TextCache variant='caption1'>
            {cache} ₽
          </TextCache>
        </InfoContainer>
        <ActionIconWrapper>
          {actionIcon}
        </ActionIconWrapper>
      </Wrapper>
    </Button>
  );
};
