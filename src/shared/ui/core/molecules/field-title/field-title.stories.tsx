import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { FieldTitle } from './field-title'

const Meta: ComponentMeta<typeof FieldTitle> = {
  title: 'ui/molecules/field-title',
  component: FieldTitle,
  args: {
    title: 'testTitle'
  },
}

export default Meta

type TFieldTitleStory = ComponentStory<typeof FieldTitle>

export const Default: TFieldTitleStory = args => <FieldTitle {...args} />
