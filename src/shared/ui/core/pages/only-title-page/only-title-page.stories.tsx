import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { OnlyTitlePage } from './only-title-page'

const Meta: ComponentMeta<typeof OnlyTitlePage> = {
  title: 'ui/pages/only-title-page',
  component: OnlyTitlePage,
  args: {
    title: { title: 'Title', }
  },
}

export default Meta

type TOnlyTitlePageStory = ComponentStory<typeof OnlyTitlePage>

export const Default: TOnlyTitlePageStory = args => <OnlyTitlePage {...args} />
