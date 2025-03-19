export type FieldType = {
  authorization: string;
  account: string;
  address: string;
  icon: string;
  pool: string;
  price: string;
  ticker: string;
  token_decimals: string;
  token_name: string;
  token_supply: string;
  token_symbol: string;
  discord?: string;
  about_us?: string;
  tg?: string;
  video?: string;
  website?: string;
  x?: string;
};

export type FieldTypePromotion = {
  authorization: string;
  end_time?: number;
  promotion_key?: string;
  promotion_type?: number;
};
export type FieldTypeBlacklist = {
  authorization: string;
  address: string;
};
