import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { SkeletonMenuList } from './skeleton-menu-list'

const Meta: ComponentMeta<typeof SkeletonMenuList> = {
  title: 'ui/organisms/skeleton-menu-list',
  component: SkeletonMenuList,
  args: {
    lenght: 10
  },
}

export default Meta

type TSkeletonMenuListStory = ComponentStory<typeof SkeletonMenuList>

export const Default: TSkeletonMenuListStory = args => <SkeletonMenuList {...args} />
