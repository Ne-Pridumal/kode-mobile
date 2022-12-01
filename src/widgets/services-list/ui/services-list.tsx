import { TMenuItemProps, UriIcon } from '@shared/ui/core/molecules';
import { MenuList, TMenuList } from '@shared/ui/core/organisms';
import { View } from 'react-native'
import { styled } from '@shared/ui/theme'
import { Typography } from '@shared/ui/core/atoms';
import { TServiceItem } from '../model';

const EmptyWrapper = styled(View)`
  flex: 1;
  background: ${({ theme }) => theme.palette.background.secondary};
  align-items: center;
  justify-content: center;
`
const Text = styled(Typography)`
  
`

export type TServicesList = Omit<TMenuList, 'items'> & {
  services: TServiceItem[]
}

export const ServicesList = ({ services, ...listProps }: TServicesList) => {
  if (services.length === 0) {
    return (
      <EmptyWrapper>
        <Text variant='body15Regular'>
          По вашему запросу ничего не найдено
        </Text>
      </EmptyWrapper>
    )
  }
  const mappedServices: TMenuItemProps[] = services.map(service => ({
    icon: <UriIcon uri={service.service_icon} size={40} />,
    title: service.service_name,
    onPress: service.onPress,
  }))
  return (
    <MenuList items={mappedServices} {...listProps} />
  );
};
