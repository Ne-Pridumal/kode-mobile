import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { DetailsComponent } from './details-component'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'

const Wrapper = styled(View)`
  background: ${({ theme }) => theme.palette.background.secondary};
`

const Meta: ComponentMeta<typeof DetailsComponent> = {
  title: 'ui/molecules/details-component',
  component: DetailsComponent,
  args: {
    title: 'test title'
  },
}

export default Meta

type TDetailsComponentStory = ComponentStory<typeof DetailsComponent>

export const Default: TDetailsComponentStory = args => (
  <Wrapper>
    <DetailsComponent {...args} />
  </Wrapper>
)
