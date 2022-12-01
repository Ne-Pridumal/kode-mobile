import React from 'react';
import { styled } from '@shared/ui/theme'
import { View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export type TSkeletonMenuList = {
  lenght: number
}

const SkeletonMenuItem = styled(View)`
  position: relative;  
  width: 100%; 
  height: 68px;
  padding: 0 16px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
`
const Content = styled(View)`
  flex:1;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  margin-left: ${({ theme }) => theme.spacing(2)}px;
`
const Icon = styled(View)`
  overflow: hidden;
  height: 40px;
  width: 40px;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 10000px;
`
const Text = styled(View)`
  height: 16px;
  width: 100%;
  mix-blend-mode: normal;
  opacity: 0.5;
  border-radius: 1000px;
  overflow: hidden;
`
const Border = styled(View)`
  width: 100%;
  height: 1px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: ${({ theme }) => theme.palette.content.secondary};
`

export const SkeletonMenuList = ({ lenght }: TSkeletonMenuList) => {
  const skeletonArray = [...Array(lenght)]

  return (
    <View>
      {skeletonArray.map((_, index) => (
        <SkeletonMenuItem key={index}>
          <Icon>
            <LinearGradient
              colors={['#706D76', '#403A47']}
              start={{ x: 0, y: 0.5 }}
              end={{ x: 1, y: 0.5 }}
              style={{ height: '100%', width: '100%', opacity: 0.5 }}
            />
          </Icon>
          <Content>
            <Text>
              <LinearGradient
                colors={['#403A47', '#706D76', '#403A47']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={{ height: '100%', width: '100%', opacity: 0.5 }}
              />
            </Text>
            <Border />
          </Content>
        </SkeletonMenuItem>
      ))}
    </View>
  );
};
