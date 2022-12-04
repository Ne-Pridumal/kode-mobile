import React from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { MenuItem, TMenuItemProps } from '../../molecules';

export type TMenuList = {
  items: TMenuItemProps[],
  refreshing?: boolean,
  onRefresh?: () => void
}

const renderItem = ({ item }: { item: TMenuItemProps }) => (
  <MenuItem icon={item.icon} title={item.title} onPress={item.onPress} />
)

export const MenuList = ({ items, refreshing = false, onRefresh }: TMenuList) => {
  return (
    <FlatList
      data={items}
      renderItem={renderItem}
      refreshing={refreshing}
      onRefresh={onRefresh}
    />
  );
};

