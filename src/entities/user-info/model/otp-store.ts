import { createEvent, createStore } from "effector"

type TUserInfo = {
  otpCode: string,
  userId: string,
  phone: string,
}

const $userInfo = createStore<TUserInfo>({
  otpCode: '',
  userId: '',
  phone: ''
})

export const setOtpInfo = createEvent<TUserInfo>()

$userInfo.on(setOtpInfo, (_, payload) => payload)

