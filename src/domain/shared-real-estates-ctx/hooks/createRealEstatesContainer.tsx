import React from 'react';

import { UseRealEstatesResult, UseRealEstatesFn } from './useRealEstates';
import { RealEstate } from '../types/real-estate';

interface ProviderProps {
  initialState: RealEstate[];
  children: React.ReactNode;
}

interface RealEstatesContainerResult {
  Provider: React.ComponentType<ProviderProps>;
  useRealEstatesContainer: () => UseRealEstatesResult;
}

export function createRealEstatesContainer(useRealEstates: UseRealEstatesFn): RealEstatesContainerResult {
  // TODO

  function Provider(props: ProviderProps) {
    // TODO
    return <div></div>;
  }

  function useRealEstatesContainer(): UseRealEstatesResult {
    // TODO
    return {} as UseRealEstatesResult;
  }

  return {
    Provider,
    useRealEstatesContainer
  };
}
