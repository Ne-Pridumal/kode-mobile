import React from 'react';
import { TextInput, TextInputProps, View, TouchableOpacity } from 'react-native';
import { styled } from '@shared/ui/theme';
import { IconSearch } from '../../atoms/icons/icon-search';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Wrapper = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 6px 16px 6px 8px;
  background: ${({ theme }) => theme.palette.content.secondary};
  border-radius: 8px;
`
const StartIconWrapper = styled(View)`
  margin-right: ${({ theme }) => theme.spacing(0.5)}px;
`
const EndIconWrapper = styled(TouchableOpacity)`
  justify-self: flex-end;
`

const Input = styled.TextInput.attrs(({ theme }) => ({
  selectionColor: theme.palette.accent.primary
}))`
  flex: 1;
  font-family: ${({ theme }) => theme.typography.body15Regular.fontFamily};
  font-style: normal;
  font-size: ${({ theme }) => theme.typography.body15Regular.size};
  color: ${({ theme }) => theme.palette.text.primary};
`

export type TSearchInputProps = TextInputProps & {
  onPressBackIcon: () => void,
  onPressClearIcon: () => void
}

export const SearchInput = ({ onPressBackIcon, onPressClearIcon, ...inputProps }: TSearchInputProps) => {
  return (
    <Wrapper>
      <StartIconWrapper>
        {inputProps.value
          ? (
            <TouchableOpacity onPress={onPressBackIcon}>
              <Ionicons name="arrow-back" size={19.5} color="white" />
            </TouchableOpacity>
          )
          : <IconSearch />
        }
      </StartIconWrapper>
      <Input {...inputProps} />
      {
        inputProps.value && (
          <EndIconWrapper onPress={onPressClearIcon}>
            <Entypo name="circle-with-cross" size={16} color="white" />
          </EndIconWrapper>
        )
      }
    </Wrapper>
  );
};

