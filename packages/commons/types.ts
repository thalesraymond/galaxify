export type RegisterUserRequest = {
  email: string;
  name: string;
  lastName: string;
  password?: string;
};

export type RegisterUserResponse = {
  id: string;
  email: string;
  name: string;
  lastName: string;
};
