import { useQuery } from "react-query";
import { TRequestPaymentCategories } from "../types"

const QUERY_KEY = 'payment-categories'
const STALE_TIME = 1000 * 360 * 24 // 24 hours

const fetcher = async (): Promise<TRequestPaymentCategories> => {
  const request = await fetch(`https://github.com/kode-frontend/files/raw/main/categories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const data = request.json();
  return data
}

export const useGetPaymentCategories = () => {
  return useQuery(QUERY_KEY, fetcher, {
    staleTime: STALE_TIME
  })
}
