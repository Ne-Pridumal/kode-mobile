import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { OTPField } from './otp-field'
import { View } from 'react-native'


const Meta: ComponentMeta<typeof OTPField> = {
  title: 'ui/molecules/otp-field',
  component: OTPField,
  args: {
    value: '',
    type: 'error'
  },
}

export default Meta

type TOTPFieldStory = ComponentStory<typeof OTPField>

export const Default: TOTPFieldStory = args => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <OTPField {...args} />
  </View>
)
