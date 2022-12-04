import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { OTPInput } from './otp-input'

const Meta: ComponentMeta<typeof OTPInput> = {
  title: 'ui/organisms/otp-input',
  component: OTPInput,
  args: {
    length: '4',
    value: '123',
    status: 'default',
    errorMessage: 'asdfasdfasdfa'
  },
}

export default Meta

type TOTPInputStory = ComponentStory<typeof OTPInput>

export const Default: TOTPInputStory = args => <OTPInput {...args} />
