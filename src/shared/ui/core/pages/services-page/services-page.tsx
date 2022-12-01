import React from 'react';
import { ListSearchTemplate } from '../../templates';

type TServicesPage = {
  list: React.ReactNode,
  searchInput: React.ReactNode
}

export const ServicesPage = ({ list, searchInput }: TServicesPage) => {
  return (
    <ListSearchTemplate
      list={list}
      search={searchInput} />
  );
};

