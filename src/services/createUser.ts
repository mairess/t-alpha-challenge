import { CreateUserFailedType, CreateUserSuccessType } from '../types';

type CreateUserProps = {
  name: string,
  taxNumber: string,
  mail: string,
  phone: string,
  password: string,
};

const createUser = async (createUserData: CreateUserProps) => {
  let result: CreateUserSuccessType;
  try {
    const response = await fetch('https://interview.t-alpha.com.br/api/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(createUserData),
    });

    if (!response.ok) {
      const errorResponse: CreateUserFailedType = await response.json();
      const errorMessage = Array.isArray(errorResponse.message)
        ? errorResponse.message.join(', ')
        : errorResponse.message;

      throw new Error(errorMessage);
    }
    result = await response.json();
    return result.message;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    return errorMessage;
  }
};

export default createUser;
