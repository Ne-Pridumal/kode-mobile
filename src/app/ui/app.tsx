import { StrictMode, ReactNode, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import { styled } from '@shared/ui/theme';

import { Storybook } from '../../../.storybook';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { AppThemeProvider } from '@app/theme-provider';
import { SnekProvider } from '@app/snek-provider';
import { QueryClientProvider, QueryClient } from 'react-query'
import { RootStackProvider } from '@app/root-stack-provider';

const queryClient = new QueryClient()

const StorybookButton = styled.TouchableOpacity`
  height: 32px;
  padding: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.button.primary};
`;
const StorybookButtonText = styled.Text`
  color: ${({ theme }) => theme.palette.text.primary};
  text-align: center;
`;

const customFonts = {
  SF_PRO_BOLD_700: require('../../../assets/fonts/SFProDisplay-Bold.ttf'),
  SF_PRO_SEMIBOLD_600: require('../../../assets/fonts/SFProDisplay-Semibold.ttf'),
  SF_PRO_MEDIUM_500: require('../../../assets/fonts/SFProDisplay-Medium.ttf'),
  SF_PRO_REGULAR_400: require('../../../assets/fonts/SFProDisplay-Regular.ttf'),
};

export const App = () => {
  const [isFontsLoaded] = useFonts(customFonts);
  const [isStorybookClosed, setStorybookClosed] = useState(false);

  if (!isFontsLoaded) {
    return <AppLoading />;
  }

  if (!isStorybookClosed) {
    return (
      <AppThemeProvider>
        <SafeAreaProvider>
          <SafeAreaView style={{ flex: 1 }}>
            <Storybook />
            <StorybookButton onPress={() => setStorybookClosed(true)}>
              <StorybookButtonText>OPEN APP</StorybookButtonText>
            </StorybookButton>
          </SafeAreaView>
        </SafeAreaProvider>
      </AppThemeProvider>
    );
  }

  return (
    <AppThemeProvider>
      <QueryClientProvider client={queryClient}>
        <SafeAreaProvider>
          <SnekProvider>
            <NavigationContainer>
              <RootStackProvider />
            </NavigationContainer>
          </SnekProvider>
        </SafeAreaProvider>
      </QueryClientProvider>
    </AppThemeProvider>
  );
};
