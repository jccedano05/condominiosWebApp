// api.js
// import { ILoginUser } from "../interfaces/IAuth";
import { ILoginUser, IUserAuth } from "../interfaces/IAuth";
import axiosInstance from "../utils/axiosInstance";

export const loginService = async (
  bodyData: ILoginUser
): Promise<IUserAuth | null> => {
  let error = null;
  const data = await axiosInstance
    .post("/auth/authenticate", bodyData)
    // .post("/login", bodyData)
    .then((res) => {
      return res.data;
    })
    .catch((e) => {
      error = e;
      console.log(e);
    });
  if (error) {
    return error;
  }
  return data;
};

// export const loginUser = (userData: ILoginUser) => {
//   return axiosInstance.post("/auth", userData);
// };
