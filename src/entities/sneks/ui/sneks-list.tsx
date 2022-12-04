import { AlertPopUp } from '@shared/ui/core/molecules';
import { useStore } from 'effector-react';
import React from 'react';
import { View } from 'react-native';
import { $sneksList, removeSnek } from '../model';


export const SneksList = () => {
  const sneksList = useStore($sneksList)
  return (
    <>
      {sneksList.map(snek => (
        <View key={snek.id} style={{ width: '100%' }}>
          <AlertPopUp
            type={snek.type}
            title={snek.title}
            closeAction={() => removeSnek({ id: snek.id })}
          />
          <View style={{ height: 6, width: '100%' }} />
        </View>
      ))}
    </>
  );
};
