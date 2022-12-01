
import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { UnderlineInput } from './underline-input'

const Meta: ComponentMeta<typeof UnderlineInput> = {
  title: 'ui/molecules/underline-input',
  component: UnderlineInput,
  args: {
    value: '0',
    color: '#6C78E6'
  },
}

export default Meta

type TUnderlineInputStory = ComponentStory<typeof UnderlineInput>

export const Default: TUnderlineInputStory = args => <UnderlineInput {...args} />
