import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { UriIcon } from '../uri-icon'
import { PhoneInput } from './phone-input'

const Meta: ComponentMeta<typeof PhoneInput> = {
  title: 'ui/molecules/phone-input',
  component: PhoneInput,
  args: {
    icon: <UriIcon uri='https://github.com/kode-frontend/files/raw/main/MTS.png' />,
    value: '+79814506503',
    onPress: () => null,
    isWrongNumber: true
  },
}

export default Meta

type TPhoneInputStory = ComponentStory<typeof PhoneInput>

export const Default: TPhoneInputStory = args => <PhoneInput {...args} />
