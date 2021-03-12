export interface RealEstate {
  id: number;
  builtAt: string;
  lat: number;
  lng: number;
  price: number;
  street: string;
  type: string;
}

export type RealEstateParams = Omit<RealEstate, 'id'>;
