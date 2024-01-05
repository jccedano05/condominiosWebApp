import { useDispatch, useSelector } from "react-redux";
import { ILoginUser, IUserAuth } from "../interfaces/IAuth";
import { setUserAuth } from "../redux/authentication/authSlice";
import { IStoreRedux } from "../interfaces/redux/IRedux";
import { loginService } from "../api/authAPI";

export const useAuth = () => {
  const dispatch = useDispatch();
  const user = useSelector(({ auth }: IStoreRedux) => auth.user);

  const loginUser = async (userData: ILoginUser) => {
    const user: IUserAuth | null = await loginService(userData);
    if (user) {
      // localStorage.setItem("token", user.token);
      dispatch(setUserAuth(user));
    }
  };

  // const verifyAuthenticationToken = async (token: String) => {
  //   // const user: IUserAuth | null = await loginService(userData);
  //   // if (user) {
  //   //   localStorage.setItem("token", user.token);
  //   //   dispatch(setUserAuth(user));
  //   }
  // };

  const logoutUser = () => {
    // const logoutUser = async (userData: ILoginUser) => {
    // const user: IUserAuth | null = await loginService(userData);
    // localStorage.removeItem("token");
    dispatch(setUserAuth(null));
  };

  return { loginUser, user, logoutUser };
};
