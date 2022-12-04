import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { ChipsList } from './chips-list'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'

const Wrapper = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 16px;
`

const Meta: ComponentMeta<typeof ChipsList> = {
  title: 'ui/organisms/chips-list',
  component: ChipsList,
  args: {
    direction: 'horizontal',
    list: [
      {
        title: '100P',
        onPress: () => { },
      },
      {
        title: '200P',
        onPress: () => { },
      },
      {
        title: '500P',
        onPress: () => { },
      },
      {
        title: '1000P',
        onPress: () => { },
      },
      {
        title: '100P',
        onPress: () => { },
      },
      {
        title: '200P',
        onPress: () => { },
      },
      {
        title: '500P',
        onPress: () => { },
      },
      {
        title: '1000P',
        onPress: () => { },
      }
    ]
  },
}

export default Meta

type TChipsListStory = ComponentStory<typeof ChipsList>

export const Default: TChipsListStory = args => (
  <Wrapper>
    <ChipsList {...args} />
  </Wrapper>
)
