import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { ChipsInput } from './chips-input'

const Meta: ComponentMeta<typeof ChipsInput> = {
  title: 'ui/organisms/chips-input',
  component: ChipsInput,
  args: {
    color: '#6C78E6',
    value: '0',
    list: [
      {
        title: '100',
        onPress: () => { }
      },
      {
        title: '200',
        onPress: () => { }
      },
      {
        title: '500',
        onPress: () => { }
      },
      {
        title: '1000',
        onPress: () => { }
      },
      {
        title: '2000',
        onPress: () => { }
      },
    ]
  },
}

export default Meta

type TChipsInputStory = ComponentStory<typeof ChipsInput>

export const Default: TChipsInputStory = args => <ChipsInput {...args} />
