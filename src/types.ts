export type Screen = 'catalog' | 'detail' | 'collection';

export type AvailabilityStatus = 'In Stock' | 'Limited Release' | 'Vault Reserve' | 'Restocking Soon';

export interface SneakerVisualConfig {
  silhouette: 'high-top' | 'low-top' | 'runner' | 'skate' | 'court';
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  soleColor: string;
  trimColor: string;
}

export interface Sneaker {
  id: string;
  name: string;
  colorway: string;
  releaseYear: number;
  price: number;
  availability: AvailabilityStatus;
  availableSizes: string[];
  description: string;
  visual: SneakerVisualConfig;
}
