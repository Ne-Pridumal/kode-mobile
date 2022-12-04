import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { IconMobile } from '../../atoms/icons'
import { TMenuItem } from '../../molecules'
import { MenuList } from './menu-list'


const mockItems: TMenuItem[] = [
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconMobile />, title: 'test' }
]

const Meta: ComponentMeta<typeof MenuList> = {
  title: 'ui/organisms/menu-list',
  component: MenuList,
  args: {
    items: mockItems
  },
}

export default Meta

type TMenuListStory = ComponentStory<typeof MenuList>

export const Default: TMenuListStory = args => <MenuList {...args} />
