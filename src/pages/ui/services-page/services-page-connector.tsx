import { AppTabsParamsList, PaymentCategoriesStackParamsList } from '@features/app-navigation';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Keyboard } from 'react-native'
import { useStore } from 'effector-react';
import { TServiceItem } from '@widgets/services-list';
import { $servicesList, setServicesList, setServicesSearch, } from '@features/services';
import { ServicesScreen } from './services-page';
import { useTheme } from 'styled-components';
import { useGetMobileServices } from '@features/services/model/hooks/get-mobile-services';
import { addSnek } from '@entities/sneks';

type ProvidersScreenProps = CompositeNavigationProp<
  BottomTabNavigationProp<AppTabsParamsList, 'paymentScreen'>,
  NativeStackNavigationProp<PaymentCategoriesStackParamsList>
>

export const ServicesPageConnector = () => {
  const navigation = useNavigation<ProvidersScreenProps>()
  const { palette } = useTheme()
  const { data, isSuccess, isLoading, isError } = useGetMobileServices()
  const { filteredList } = useStore($servicesList)
  const mappedServicesList: TServiceItem[] = filteredList.map(service => ({
    ...service,
    onPress: () => {
      navigation.navigate('MobileTransaction', {
        service_name: service.service_name,
        service_icon: service.service_icon,
        service_id: service.service_id
      })
    }
  }))
  const [search, setSearch] = useState<string>('')
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);

  useEffect(() => {
    if (isSuccess) {
      setServicesList(data)
    }
    if (isError) {
      addSnek({
        id: Date.now(),
        type: 'alarm',
        title: 'Что-то пошло не так',
        timer: 5000
      })
    }
  }, [data, isSuccess, isError])

  // Взаимодействие с навигацией
  useEffect(() => {
    const focus = navigation.addListener('focus', () => {
      navigation.getParent()?.setOptions({
        tabBarStyle: {
          display: 'none'
        },
      })
    })
    const unfocus = navigation.addListener('beforeRemove', () => {
      navigation.getParent()?.setOptions({
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: palette.background.primary,
          paddingTop: 14,
          paddingBottom: 6,
          height: 56,
          justifyContent: 'space-between',
          alignItems: 'center'
        },
        tabBarActiveTintColor: palette.accent.secondary,
        tabBarInactiveTintColor: palette.content.primary,
      })
    })
    return () => {
      focus;
      unfocus
    }
  }, [])
  useEffect(() => {
    setServicesSearch(search)
  }, [search])

  return (
    <ServicesScreen
      services={mappedServicesList}
      onPressBackIcon={() => Keyboard.dismiss()}
      onPressClearIcon={() => setSearch('')}
      onChangeText={(e) => setSearch(e)}
      value={search}
      onFocus={() => navigation.setOptions({
        headerShown: false
      })}
      onBlur={() => navigation.setOptions({
        headerShown: true
      })}
      onRefresh={() => {
        setIsRefreshing(false)
      }}
      isLoading={isLoading}
      refreshing={isRefreshing}
    />
  );
};
