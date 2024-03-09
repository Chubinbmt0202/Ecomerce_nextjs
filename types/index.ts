export type VotesType = {
  count: number;
  value: number;
};
export type PunctuationType = {
  countOpinions: number;
  punctuation: number;
  votes: VotesType[];
};

export type ReviewType = {
  name: string;
  avatar: string;
  description: string;
  punctuation: number;
};
export type ProductType = {
  id: string;
  name: string;
  category: string;
  thumb: string;
  price: string;
  count: number;
  color: string;
  descriptions: string;
  size: string;
  images: string[];
  discount?: string;
  currentPrice: number;
  punctuation: PunctuationType;
  reviews: ReviewType[];
};
export type ProductTypeList = {
  [x: string]: any;
  id: string;
  name: string;
  price: string;
  color: string;
  images: string[];
  discount?: string;
  currentPrice?: number;
}

export type ProductStoreType = {
  id: string,
  name: string,
  thumb: string,
  price : number,
  count: number,
  color: string,
  size: string
}

export type UserType = {
  id: string,
  name: string,
}

export type LoginType = {
  email: string,
  password: string
}