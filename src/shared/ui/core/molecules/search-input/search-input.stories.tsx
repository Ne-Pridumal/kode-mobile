import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { View } from 'react-native'
import { SearchInput } from './search-input'
import { styled } from '@shared/ui/theme'

const Meta: ComponentMeta<typeof SearchInput> = {
  title: 'ui/molecules/search-input',
  component: SearchInput,
  args: {
    value: 'Поиск'
  },
}

const Wrapper = styled(View)`
  padding: 64px 16px 16px 16px;
  background: #312C39;
`

export default Meta

type TSearchInputStory = ComponentStory<typeof SearchInput>

export const Default: TSearchInputStory = args => (
  <Wrapper>
    <SearchInput {...args} />
  </Wrapper>)
