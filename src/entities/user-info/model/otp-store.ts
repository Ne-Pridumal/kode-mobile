import { createEvent, createStore } from "effector"

type TUserInfo = {
  otpCode: string,
  userId: string,
  phone: string,
}

export const $userInfo = createStore<TUserInfo>({
  otpCode: '',
  userId: '',
  phone: ''
})

export const setUserOtpAndPhone = createEvent<Pick<TUserInfo, 'phone' | 'otpCode'>>()

export const setUserInfo = createEvent<TUserInfo>()

$userInfo.on(setUserInfo, (_, payload) => payload)

$userInfo.on(setUserOtpAndPhone, (state, payload) => ({
  ...state,
  phone: payload.phone,
  otpCode: payload.otpCode
}))

