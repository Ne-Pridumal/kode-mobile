import { OnlyTitlePage } from '@shared/ui/core/pages';
import React from 'react';


export type TOnlyTitleSceen = {

}

type TOnlyTitleScreenProps = TOnlyTitleSceen & {
  title: string
}

export const OnlyTitleScreen = ({ title }: TOnlyTitleScreenProps) => () => {
  return (
    <OnlyTitlePage title={{ title }} />
  );
};
