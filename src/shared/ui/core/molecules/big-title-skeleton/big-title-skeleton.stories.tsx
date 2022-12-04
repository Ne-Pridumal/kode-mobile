import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { BigTitleSkeleton } from './big-title-skeleton'

const Meta: ComponentMeta<typeof BigTitleSkeleton> = {
  title: 'ui/molecules/big-title-skeleton',
  component: BigTitleSkeleton,
  args: {
    width: 173,
    height: 34,
    marginTop: 5,
    marginBottom: 6
  },
}

export default Meta

type TBigTitleSkeletonStory = ComponentStory<typeof BigTitleSkeleton>

export const Default: TBigTitleSkeletonStory = args => <BigTitleSkeleton {...args} />
