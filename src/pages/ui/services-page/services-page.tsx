import { SearchInput, TSearchInputProps } from '@shared/ui/core/molecules';
import { SkeletonMenuList } from '@shared/ui/core/organisms';
import { ServicesPage } from '@shared/ui/core/pages';
import { ServicesList, TServicesList } from '@widgets/services-list/ui/services-list';

export type TServicesPage = TServicesList & TSearchInputProps & {
  isLoading: boolean
}

export const ServicesScreen = ({ services, refreshing, onRefresh, isLoading, ...inputProps }: TServicesPage) => {
  if (isLoading) {
    return (
      <ServicesPage
        list={<SkeletonMenuList lenght={5} />}
        searchInput={<SearchInput {...inputProps} placeholder='Поиск' />}
      />
    )
  }
  return (
    <ServicesPage
      list={<ServicesList services={services} refreshing={refreshing} onRefresh={onRefresh} />}
      searchInput={<SearchInput {...inputProps} placeholder='Поиск' />}
    />
  );
};
