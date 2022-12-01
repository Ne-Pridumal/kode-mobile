import React from 'react';
import { styled } from '@shared/ui/theme'
import { TouchableOpacity, View } from 'react-native'
import { Typography } from '../../atoms';
import { SimpleLineIcons } from '@expo/vector-icons';

const Wrapper = styled(View)`
  padding: 28px 0 8px;
  position: relative;
  height: 72px;
`
const Button = styled(TouchableOpacity)`
  flex-direction: row;
  position: relative;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
`
const TextContentWrapper = styled(View)`
  height: 100%;
`
const TextTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.text.secondary};
`
const Border = styled(View)`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: ${({ theme }) => theme.palette.content.secondary};
`

export type TDetailsComponent = {
  title: string,
  subtitle?: string,
  onPress: () => void
}

export const DetailsComponent = ({ title, onPress }: TDetailsComponent) => {
  return (
    <Wrapper>
      <Button activeOpacity={0.7} onPress={onPress}>
        <TextContentWrapper>
          <TextTitle variant='body15Regular'>
            {title}
          </TextTitle>
        </TextContentWrapper>
        <View
          style={{ width: 24, height: 24 }}
        >
          <SimpleLineIcons name='arrow-down' size={10} color={'#C2C1C6'} />
        </View>
        <Border />
      </Button>
    </Wrapper>
  );
};
