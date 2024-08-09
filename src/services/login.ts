import { LoginFailedType, LoginSuccessType } from '../types';

type LoginProps = {
  taxNumber: string,
  password: string,
};

const login = async (loginData: LoginProps) => {
  let result: LoginSuccessType;
  try {
    const response = await fetch('https://interview.t-alpha.com.br/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });

    if (!response.ok) {
      const errorResponse: LoginFailedType = await response.json();
      throw new Error(errorResponse.message);
    }
    result = await response.json();
    return result.data.token;
  } catch (error) {
    const errorMessage = (error as Error).message;
    console.error(errorMessage);
    return errorMessage;
  }
};

export default login;
