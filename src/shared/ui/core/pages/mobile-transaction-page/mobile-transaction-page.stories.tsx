import { ComponentMeta, ComponentStory } from '@storybook/react-native'
import { styled } from '@shared/ui/theme'
import { View } from 'react-native'
import { PhoneInput, UriIcon } from '../../molecules'
import { BigButton } from '../../atoms'
import { ChipsInput } from '../../organisms'
import { MobileTransactionPage } from './mobile-transaction-page'

const Card = styled(View)`
  height: 72px;
  flex: 1;
`

const Meta: ComponentMeta<typeof MobileTransactionPage> = {
  title: 'ui/pages/transaction-mobile-page',
  component: MobileTransactionPage,
  args: {
    card: <Card />,
    input: <PhoneInput
      icon={<UriIcon uri='https://github.com/kode-frontend/files/raw/main/MTS.png' />}
      defaultValue='Номер телефона'
      isWrongNumber={false}
      onPress={() => { }}
    />,
    transactionValue: <ChipsInput
      value='0'
      list={[
        {
          title: '100',
          onPress: () => { }
        },
        {
          title: '200',
          onPress: () => { }
        },
        {
          title: '500',
          onPress: () => { }
        },
        {
          title: '1000',
          onPress: () => { }
        },
        {
          title: '2000',
          onPress: () => { }
        },
      ]}
      showCashback={false}
      underlineColor='#6C78E6'
    />,
    continueButton: <BigButton title='Продолжить' />,
  },
}

export default Meta

type TTransactionMobilePageStory = ComponentStory<typeof MobileTransactionPage>

export const Default: TTransactionMobilePageStory = args => <MobileTransactionPage {...args} />
