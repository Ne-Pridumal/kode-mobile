import { TMenuItemProps, UriIcon } from '@shared/ui/core/molecules';
import { MenuList, } from '@shared/ui/core/organisms';
import { TPaymentMenuItem } from '../model';


export type TCategoriesList = {
  items: TPaymentMenuItem[]
}

export const CategoriesList = ({ items = [] }: TCategoriesList) => {
  const mappedItems: TMenuItemProps[] = items.map(item => ({
    icon: <UriIcon uri={item.category_icon} />,
    onPress: item.onPress,
    title: item.category_name
  }))
  return (
    <MenuList
      items={mappedItems}
    />
  );
};
