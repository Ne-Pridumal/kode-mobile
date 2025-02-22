import { IconInput, TIconInput } from '@shared/ui/core/molecules';
import { CustomKeyboard, TCustomKeyboard } from '@shared/ui/core/organisms';
import { CustomKeyboardInputPage } from '@shared/ui/core/pages';
import { styled } from '@shared/ui/theme'
import { View, Image } from 'react-native'
import React from 'react';
import { BigButton } from '@shared/ui/core/atoms';

const ContentWrapper = styled(View)`
  position: relative;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 16px;
  background: ${({ theme }) => theme.palette.background.secondary};
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

const InputWrapper = styled(View)`
  width: 100%;
  height: 52px;
`

const ButtonWrapper = styled(View)`
  position: relative;
  width: 100%;  
  height: auto;
  justify-content: center;
  align-items: center;
  padding: 16px 0 24px 0;
  overflow: hidden;
  bottom: 0;
`

type TPhoneNumberPage = {
  keyboardProps: TCustomKeyboard,
  inputProps: TIconInput,
  buttonAction: () => void
  isHideKeyboard: boolean,
}

export const PhoneNumberPage = ({ isHideKeyboard, keyboardProps, inputProps, buttonAction }: TPhoneNumberPage) => {

  return (
    <CustomKeyboardInputPage
      keyboard={<CustomKeyboard {...keyboardProps} />}
      isHideKeyboard={isHideKeyboard}
      content={
        <ContentWrapper>
          <ImageWrapper>
            <Img source={require('./logo.png')} />
          </ImageWrapper>
          <InputWrapper>
            <IconInput {...inputProps} />
          </InputWrapper>
          <ButtonWrapper>
            <BigButton title='войти' onPress={buttonAction} />
          </ButtonWrapper>
        </ContentWrapper>
      }
    />
  );
};
