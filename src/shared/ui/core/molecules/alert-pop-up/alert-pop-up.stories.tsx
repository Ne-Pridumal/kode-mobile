import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { AlertPopUp } from './alert-pop-up'

const Meta: ComponentMeta<typeof AlertPopUp> = {
  title: 'ui/molecules/alert-pop-up',
  component: AlertPopUp,
  args: {
    closeAction: () => null,
    title: 'test',
    type: 'alarm'
  },
}

export default Meta

type TAlertPopUpStory = ComponentStory<typeof AlertPopUp>

export const Default: TAlertPopUpStory = args => <AlertPopUp {...args} />
