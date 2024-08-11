/* eslint-disable max-len */
import { ProductUpdateType } from '../types';

type UpdateProductProps = {
  token: string | null;
  id: number;
  dataToUpdate: ProductUpdateType
};

const updateProduct = async ({ token, id, dataToUpdate }: UpdateProductProps) => {
  try {
    const response = await fetch(`https://interview.t-alpha.com.br/api/products/update-product/${id}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToUpdate),
    });

    if (!response.ok) {
      throw new Error('Fetch error!');
    }
    const result = await response.json();
    return result.data;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    return errorMessage;
  }
};

export default updateProduct;
