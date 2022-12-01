import { TMobileTransactionModel } from '@entities/transactions';
import { BigButton } from '@shared/ui/core/atoms';
import { Card, PhoneInput, UriIcon } from '@shared/ui/core/molecules';
import { ChipsInput } from '@shared/ui/core/organisms';
import { useState, useCallback, useEffect } from 'react';
import { mask } from 'react-native-mask-text';
import { MobileTransactionScreen } from './mobile-transaction-page';
import { View } from 'react-native'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { PaymentCategoriesStackParamsList } from '@features/app-navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AlertPopUp } from '@shared/ui/core/molecules/alert-pop-up/alert-pop-up';
import { DetailsComponent } from '@shared/ui/core/molecules/details-component/details-component';
import { SimpleLineIcons } from '@expo/vector-icons';
import { addSnek } from '@entities/sneks';

const alarmMessage = {
  emptyFields: 'Поля не могут быть пустыми',
  wrongNumber: 'Неправильно введен номер телефона',
  hugeTransactionValue: 'Недостаточно средств на счету'
}

type ProvidersScreenProps = NativeStackNavigationProp<PaymentCategoriesStackParamsList>

export const MobileTransactionPageConnector = () => {
  const route = useRoute<RouteProp<PaymentCategoriesStackParamsList, 'MobileTransaction'>>()
  const navigation = useNavigation<ProvidersScreenProps>()
  const { service_id, service_icon, service_name } = route.params
  const [transactionInfo, setTransactionInfo] = useState<TMobileTransactionModel>({
    phoneNumber: '',
    transactionValue: '0 ₽',
    cardNumber: '',
  })
  const [alarmText, setAlarmText] = useState<string>('')
  const [isChipsInputFocus, setChipsInputFocus] = useState<boolean>(false)
  const [isShowCard, setIsShowCard] = useState<boolean>(false)
  const changeTransactionInfo = useCallback((name: keyof TMobileTransactionModel, e: string) => {
    setTransactionInfo(state => {
      return {
        ...state,
        [name]: e
      }
    })
  }, [setTransactionInfo])
  const chipInputOnBlurAction = () => {
    const m = `${'9'.repeat(transactionInfo.transactionValue.length)} ₽`
    const maskedValue = transactionInfo.transactionValue.length === 0
      ? '0 ₽'
      : mask(transactionInfo.transactionValue, m)
    setTransactionInfo({ ...transactionInfo, transactionValue: maskedValue })
    setChipsInputFocus(false)
  }
  const chipInputOnFocusAction = () => {
    const newTransactionValue = transactionInfo.transactionValue.slice(0, -2)
    setTransactionInfo({ ...transactionInfo, transactionValue: newTransactionValue })
    setChipsInputFocus(true)
  }
  const continueAction = () => {
    if (transactionInfo.transactionValue === '0 ₽' || transactionInfo.phoneNumber.length === 0 || !isShowCard) {
      setAlarmText(alarmMessage.emptyFields)
      addSnek({
        id: Date.now(),
        title: alarmMessage.emptyFields,
        type: 'alarm',
        timer: 5000
      })
      return
    }
    if (transactionInfo.phoneNumber.length < 16) {
      setAlarmText(alarmMessage.wrongNumber)
      addSnek({
        id: Date.now(),
        title: alarmMessage.wrongNumber,
        type: 'alarm',
        timer: 5000
      })
      return
    }
    if (Number(transactionInfo.transactionValue.slice(0, -2)) > 10000) {
      setAlarmText(alarmMessage.hugeTransactionValue)
      addSnek({
        id: Date.now(),
        title: alarmMessage.hugeTransactionValue,
        type: 'alarm',
        timer: 5000
      })
      return
    }

    //Дальейшая навигация по приложению
    setAlarmText('Успех')

    addSnek({
      id: Date.now(),
      title: 'Успех',
      type: 'success',
      timer: 5000
    })
  }

  useEffect(() => {
    navigation.setOptions({
      headerTitle: service_name,
    })
  }, [alarmText])
  return (
    <MobileTransactionScreen
      card={
        !isShowCard
          ? <DetailsComponent title='Выберите карту для оплаты' onPress={() => setIsShowCard(true)} />
          : <Card
            cache='10000000'
            title='Карта зарплатная'
            actionIcon={
              <View
                style={{ width: 24, height: 24 }}
              >
                <SimpleLineIcons name='arrow-down' size={10} color={'#C2C1C6'} />
              </View>
            }
          />
      }
      input={
        <PhoneInput
          icon={<UriIcon uri={service_icon} />}
          placeholder='Номер телефона'
          value={transactionInfo.phoneNumber}
          onChangeText={(e) => changeTransactionInfo('phoneNumber', e)}
          onPress={() => { changeTransactionInfo('phoneNumber', '') }}
          onFocus={() => changeTransactionInfo('phoneNumber', '+7')}
          isWrongNumber={alarmText === alarmMessage.emptyFields || alarmText === alarmMessage.wrongNumber ? true : false}
        />
      }
      transactionValue={
        <ChipsInput
          value={transactionInfo.transactionValue}
          onChangeText={e => changeTransactionInfo('transactionValue', e)}
          onFocus={chipInputOnFocusAction}
          onBlur={chipInputOnBlurAction}
          cashbackPercent={10}
          cashback={Number(transactionInfo.transactionValue.slice(0, -2)) * 0.1}
          showCashback={transactionInfo.transactionValue !== '0 ₽' ? true : false}
          list={[
            {
              title: '100',
              onPress: () => { changeTransactionInfo('transactionValue', '100 ₽') }
            },
            {
              title: '200',
              onPress: () => { changeTransactionInfo('transactionValue', '200 ₽') }
            },
            {
              title: '500',
              onPress: () => { changeTransactionInfo('transactionValue', '500 ₽') }
            },
            {
              title: '1000',
              onPress: () => { changeTransactionInfo('transactionValue', '1000 ₽') }
            },
            {
              title: '2000',
              onPress: () => { changeTransactionInfo('transactionValue', '2500 ₽') }
            },
          ]}
          underlineColor={isChipsInputFocus
            ? '#6C78E6'
            : alarmText === alarmMessage.hugeTransactionValue || alarmText === alarmMessage.emptyFields
              ? '#FB6176'
              : '#403A47'
          }
        />}
      continueButton={<BigButton title='Продолжить' onPress={continueAction} />}
    />
  );
};
