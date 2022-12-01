import { TServiceModel } from "@entities/service"
import { TRequestPaymentCategories } from "@features/payment-categories/model/types"
import { useQuery } from "react-query"

const QUERY_KEY = 'mobile-services'
const STALE_TIME = 1000 * 360 * 24 // 24 hours

const fetcher = async (): Promise<TServiceModel[]> => {
  const request = await fetch(`https://github.com/kode-frontend/files/raw/main/categories.json`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const { category }: TRequestPaymentCategories = await request.json();

  const data = category.find(c => c.category_name === 'Мобильная связь')!.services
  return data
}

export const useGetMobileServices = () => {
  return useQuery(QUERY_KEY, fetcher, {
    staleTime: STALE_TIME
  })
}
