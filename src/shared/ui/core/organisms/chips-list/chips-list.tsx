import React from 'react';
import { Chip, TChip } from '@shared/ui/core/atoms'
import { FlatList, View } from 'react-native'

export type TChipsList = {
  list: TChip[],
  direction: 'horizontal' | 'vertical'
}

const renderItem = ({ item }: { item: TChip }) => (
  <Chip
    onPress={item.onPress}
    title={item.title}
  />
)
const Separator = () => (
  <View style={{ width: 16 }} />
)

export const ChipsList = ({ list, direction }: TChipsList) => {
  return (
    <FlatList
      data={list}
      ItemSeparatorComponent={Separator}
      renderItem={renderItem}
      horizontal={direction === 'horizontal' ? true : false}
      showsHorizontalScrollIndicator={false}
    />

  );
};
