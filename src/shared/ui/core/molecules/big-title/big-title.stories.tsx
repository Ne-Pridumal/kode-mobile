import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { BigTitle } from './big-title'

const Meta: ComponentMeta<typeof BigTitle> = {
  title: 'ui/molecules/big-title',
  component: BigTitle,
  args: {
    title: 'Платежи',
    marginTop: 3,
    marginBottom: 3
  },
}

export default Meta

type TBigTitleStory = ComponentStory<typeof BigTitle>

export const Default: TBigTitleStory = args => <BigTitle {...args} />
