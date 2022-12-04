import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { IconMobile } from '../../atoms/icons'
import { MenuItem } from './menu-item'

const Meta: ComponentMeta<typeof MenuItem> = {
  title: 'ui/molecules/menu-item',
  component: MenuItem,
  args: {
    icon: <IconMobile />,
    title: 'Мобильная связь',
  },
}

export default Meta

type TMenuItemStory = ComponentStory<typeof MenuItem>

export const Default: TMenuItemStory = args => <MenuItem {...args} />
