import React from 'react';

import { styled } from '@shared/ui/theme'
import { KeyboardAvoidingView, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Wrapper = styled(KeyboardAvoidingView)`
  background: ${({ theme }) => theme.palette.background.secondary};
  flex: 1;
`
const SearchWrapper = styled(View)`
  background: ${({ theme }) => theme.palette.background.primary};
  padding: 12px 16px 16px;
`


export type TListSearchTemplateProps = {
  search: React.ReactNode,
  list: React.ReactNode
}

export const ListSearchTemplate = ({ search, list }: TListSearchTemplateProps) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Wrapper>
          <SearchWrapper>
            {search}
          </SearchWrapper>
          {list}
        </Wrapper>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

