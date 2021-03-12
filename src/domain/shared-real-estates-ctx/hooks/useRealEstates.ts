import { useCallback } from 'react';

import { RealEstate } from '../types/real-estate';

export interface UseRealEstatesResult {
  realEstates: RealEstate[];
  setMany(realEstates: RealEstate[]): void;
  addOne(realEstate: RealEstate): void;
};

export type UseRealEstatesFn = typeof useRealEstates;

export default function useRealEstates(initialRealEstates: RealEstate[]): UseRealEstatesResult {
  // TODO
  const realEstates: RealEstate[] = [];

  const setMany = useCallback((realEstates: RealEstate[]): void => {
    // TODO
  }, []);

  const addOne = useCallback((realEstate: RealEstate): void => {
    // TODO
  }, []);

  return {
    realEstates,
    setMany,
    addOne,
  };
}
