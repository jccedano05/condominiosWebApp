export interface ILoginUser {
  email: string;
  password: string;
}

export interface IUserAuth {
  message: string;
  username: string;
  token: string;
  roles: IRoles[];
}

export interface IRoles {
  authority: string;
}
