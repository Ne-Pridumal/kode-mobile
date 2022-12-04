import { TServiceModel } from "@entities/service";

export type TServiceItem = Omit<TServiceModel, 'service_id'> & {
  onPress: () => void
}
