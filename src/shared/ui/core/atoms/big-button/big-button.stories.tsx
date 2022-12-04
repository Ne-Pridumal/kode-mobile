import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { View } from 'react-native'
import { BigButton } from './big-button'
import { styled } from '@shared/ui/theme'


const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items:center;
  padding: 16px;
`

const Meta: ComponentMeta<typeof BigButton> = {
  title: 'ui/atoms/big-button',
  component: BigButton,
  args: {
    title: 'Продолжить',
  },
}

export default Meta

type TBigButtonStory = ComponentStory<typeof BigButton>

export const Default: TBigButtonStory = args => (
  <Wrapper>
    <BigButton {...args} />
  </Wrapper>
)
