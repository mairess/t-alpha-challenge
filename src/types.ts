// export type ErrorState = {
//   [key: string]: string;
// };

// export type ErrorResponse = {
//   message: string[];
//   error: string;
//   statusCode: number;
// };

// export type SuccessResponse<T> = {
//   success: boolean;
//   message: string;
//   data: T;
// };

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

// export type LoginSuccessResponse = SuccessResponse<LoginSuccessData>;

// export type FormState = {
//   [key: string]: string;
// };

// export type Field = {
//   id: string;
//   label: string;
//   name: string;
//   type: string;
// };
