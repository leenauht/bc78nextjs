export type Shoe = {
  id: number | string;
  name: string;
  alias: string;
  price: number;
  description: string;
  sizes: number[];
  shortDescription: string;
  quantity: number;
  deleted: boolean;
  categories: string[];
  relatedProducts: number[];
  feature: boolean;
  image: string;
  imgLink: string;
};
