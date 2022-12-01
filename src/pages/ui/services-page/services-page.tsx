import { SearchInput, TSearchInputProps } from '@shared/ui/core/molecules';
import { ServicesPage } from '@shared/ui/core/pages';
import { ServicesList, TServicesList } from '@widgets/services-list/ui/services-list';

export type TServicesPage = TServicesList & TSearchInputProps & {

}

export const ServicesScreen = ({ services, refreshing, onRefresh, ...inputProps }: TServicesPage) => {
  return (
    <ServicesPage
      list={<ServicesList services={services} refreshing={refreshing} onRefresh={onRefresh} />}
      searchInput={<SearchInput {...inputProps} placeholder='Поиск' />}
    />
  );
};
