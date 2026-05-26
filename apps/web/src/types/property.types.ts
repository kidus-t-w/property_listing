export type Property = {
  title: string;
  description: string;
  status: string;
  type: string;
  address: string;
  country: string;
  city: string;
  subCity: string;
  areaSize: number;
  price: number;
  image: string[];
  furnished?: boolean;
  bathrooms?: number;
  bedrooms?: number;
  garages?: number;
  floors?: number;
  yearBuild?: number;
};
