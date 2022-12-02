import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { IconMobile } from '../../atoms/icons'
import { IconInput } from './icon-input'
import { ActivityIndicator } from 'react-native'

const Meta: ComponentMeta<typeof IconInput> = {
  title: 'ui/molecules/icon-input',
  component: IconInput,
  args: {
    beforeIcon: <IconMobile size={24} />,
    inputProps: { value: 'text' },
    afterIcon: <ActivityIndicator size={'small'} color='#6C78E6' />
  },
}

export default Meta

type TIconInputStory = ComponentStory<typeof IconInput>

export const Default: TIconInputStory = args => <IconInput {...args} />
