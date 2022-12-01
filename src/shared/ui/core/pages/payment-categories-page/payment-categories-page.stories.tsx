import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { IconHouse, IconMail, IconMobile } from '../../atoms/icons'
import { BigTitle, TMenuItem } from '../../molecules'
import { MenuList } from '../../organisms'
import { PaymentCategoriesPage } from './payment-categories-page'


export const mockItems: TMenuItem[] = [
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconHouse />, title: 'test' },
  { icon: <IconMail />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconHouse />, title: 'test' },
  { icon: <IconMail />, title: 'test' },
  { icon: <IconMobile />, title: 'test' },
  { icon: <IconHouse />, title: 'test' },
  { icon: <IconMail />, title: 'test' },
]

const Meta: ComponentMeta<typeof PaymentCategoriesPage> = {
  title: 'ui/pages/payment-categories-page',
  component: PaymentCategoriesPage,
  args: {
    title: <BigTitle title='Платежи' marginTop={3} marginBottom={1} />,
    list: <MenuList items={mockItems} />
  },
}

export default Meta

type TPaymentCategoriesPageStory = ComponentStory<typeof PaymentCategoriesPage>

export const Default: TPaymentCategoriesPageStory = args => <PaymentCategoriesPage {...args} />
