import { useMutation } from "react-query"
import { TOTPCodeRequest } from "./types"


const fetcher = async (phone: string): Promise<TOTPCodeRequest> => {
  const request = await fetch(
    'https://stoplight.io/mocks/kode-education/kode-bank/27774162/api/auth/login',
    {
      method: 'POST',
      body: JSON.stringify({
        phone
      }),
      headers: {
        'Content-Type': 'application/json',
      }
    }
  )
  const data = await request.json()
  return data
}

export const useGetOTPCode = () => {
  return useMutation((phone: string) => fetcher(phone))
}
