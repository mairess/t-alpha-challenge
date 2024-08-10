import { GetAllProductsFailedType, GetAllProductsSuccessType } from '../types';

const getProducts = async (token: string) => {
  let result: GetAllProductsSuccessType;
  try {
    const response = await fetch('https://interview.t-alpha.com.br/api/products/get-all-products', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorResponse: GetAllProductsFailedType = await response.json();
      throw new Error(errorResponse.message);
    }
    result = await response.json();
    return result.data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    return errorMessage;
  }
};

export default getProducts;
