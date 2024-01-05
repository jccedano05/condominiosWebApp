import { IUserAuth } from "../IAuth";

export interface IStoreRedux {
  auth: IAuthRedux;
}

export interface IAuthRedux {
  isAuthenticated: boolean;
  user: IUserAuth | null;
}

// export interface ICompaniesRedux {
//   companies: ICompany[] | null;
//   isLoading: boolean;
// }
