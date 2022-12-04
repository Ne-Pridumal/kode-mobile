import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { SearchInput } from '../../molecules'
import { MenuList } from '../../organisms'
import { ServicesPage } from './services-page'

const Meta: ComponentMeta<typeof ServicesPage> = {
  title: 'ui/pages/services-page',
  component: ServicesPage,
  args: {
    list: <MenuList items={[]} />,
    searchInput: <SearchInput
      onPressBackIcon={() => null}
      onPressClearIcon={() => null}
    />
  }
}

export default Meta

type TServicesPageStory = ComponentStory<typeof ServicesPage>

export const Default: TServicesPageStory = args => <ServicesPage {...args} />
