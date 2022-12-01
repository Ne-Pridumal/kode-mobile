import { PaymentCategoriesStackParamsList } from '@features/app-navigation';
import { $categoriesList, getPaymentCategoriesFX, setCategoriesList, useGetPaymentCategories } from '@features/payment-categories';
import { setServicesList } from '@features/services';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TPaymentMenuItem } from '@widgets/cateroies-list';
import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { PaymentCategoriesScreen } from './payment-categories-page';

export const PaymentCategoriesPageConnector = () => {
  const navigation = useNavigation<NativeStackNavigationProp<PaymentCategoriesStackParamsList>>()
  const data = useStore($categoriesList)
  useEffect(() => {
    getPaymentCategoriesFX();
  }, [])
  const mappedData: TPaymentMenuItem[] = data.map(category => {
    if (category.category_name == 'Мобильная связь') {
      return {
        category_icon: category.category_icon,
        category_name: category.category_name,
        onPress: () => {
          setServicesList(category.services)
          navigation.navigate('MobileServices')
        }
      }
    }
    return {
      category_icon: category.category_icon,
      category_name: category.category_name,
      onPress: () => null
    }
  })
  return (
    <PaymentCategoriesScreen items={mappedData} />
  );
};

