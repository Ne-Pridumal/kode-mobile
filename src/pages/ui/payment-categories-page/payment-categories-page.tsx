import { BigTitle, BigTitleSkeleton } from '@shared/ui/core/molecules';
import { SkeletonMenuList } from '@shared/ui/core/organisms';
import { PaymentCategoriesPage } from '@shared/ui/core/pages';
import { CategoriesList, TCategoriesList } from '@widgets/cateroies-list/ui/categories-list';

type TPaymentCategoriesScreen = TCategoriesList & {
  isLoading: boolean
}


export const PaymentCategoriesScreen = ({ items, isLoading }: TPaymentCategoriesScreen) => {
  if (isLoading) {
    return (
      <PaymentCategoriesPage
        title={<BigTitleSkeleton width={173} height={34} marginTop={3} marginBottom={1} />}
        list={<SkeletonMenuList lenght={3} />}
      />
    )
  }
  return (
    <PaymentCategoriesPage
      title={<BigTitle title='Платежи' marginTop={3} marginBottom={1} />}
      list={<CategoriesList items={items} />}
    />
  );
};
