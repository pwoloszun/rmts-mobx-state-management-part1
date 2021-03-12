import { fetchEntities, createEntity } from 'src/infrastructure/api';

import { RealEstate, RealEstateParams } from '../types/real-estate';

const BASE_URL = '/real-estates';

export function fetchRealEstates(): Promise<RealEstate[]> {
  return fetchEntities<RealEstate>(BASE_URL);
}

export function createRealEstate(params: RealEstateParams): Promise<RealEstate> {
  return createEntity<RealEstate>(BASE_URL, params);
}
