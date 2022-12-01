import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { Card } from './card'
import { View } from 'react-native'
import { SimpleLineIcons } from '@expo/vector-icons';
import {styled} from '@shared/ui/theme'

const Wrapper = styled(View)`
  background: ${({theme}) => theme.palette.background.secondary};
`

const Meta: ComponentMeta<typeof Card> = {
  title: 'ui/molecules/card',
  component: Card,
  args: {
    cache: '10000,000',
    title: 'Test Card',
    actionIcon: <View
      style={{ width: 24, height: 24 }}
    >
      <SimpleLineIcons name='arrow-down' size={10} color={'#C2C1C6'} />
    </View>,
  },
}

export default Meta

type TCardStory = ComponentStory<typeof Card>

export const Default: TCardStory = args => (
  <Wrapper>
    <Card {...args} />
  </Wrapper>
)
