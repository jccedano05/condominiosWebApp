import { IUserAuth } from "../../interfaces/IAuth";
import { IAuthRedux } from "../../interfaces/redux/IRedux";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAuthRedux = {
  isAuthenticated: false,
  user: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUserAuth: (state, action: PayloadAction<IUserAuth> | null) => {
      if (action?.payload) {
        state.user = action.payload;
      } else {
        state.user = null;
      }
    },
  },
  // setUser: (state, action: PayloadAction<{ user: string }>) => {
  //   const { user } = action.payload;
  //   state.user = user;
  // },
  // setauth: (state, action: PayloadAction<{ auth: string }>) => {
  //   const { auth } = action.payload;
  //   state.auth = auth;
  // },
});

export const { setUserAuth } = authSlice.actions;
export default authSlice.reducer;
