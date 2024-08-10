type Data = {
  token: string;
};

export type LoginSuccessType = {
  success: boolean;
  message: string;
  data: Data;
};

export type LoginFailedType = {
  success: boolean;
  message: string;
  data: number | null;
};

export type FormLoginType = {
  taxNumber: string;
  password: string;
};

export type CreateUserSuccessType = {
  success: boolean;
  message: string;
  data: number | null;

};

export type CreateUserFailedType = {
  message: string;
  error: string;
  status: number
};

export type ProductType = {
  id: number;
  name: string;
  description: string;
  price: number;
  stock: number
};

export type GetAllProductsSuccessType = {
  success: boolean;
  message: string | null;
  data: {
    products: ProductType[]
  };
};

export type GetAllProductsFailedType = {
  message: string;
  statusCode: number
};
