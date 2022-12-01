import { CustomKeyboard } from '@widgets/custom-keyboard';
import React, { useRef, useState } from 'react';
import { TextInput, View, Text } from 'react-native';

export const CustomKeyboardPageConnector = () => {
  const [keyboardState, setKeyboardState] = useState<string>('')
  return (
    <View style={{ flex: 1 }}>
      <Text>
        {keyboardState}
      </Text>
      <CustomKeyboard
        keyboardChangeAction={setKeyboardState}
        onPressNumber={() => null}
        type='numeric'
      />
    </View>
  );
};
