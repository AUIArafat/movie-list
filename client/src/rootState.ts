import { LayoutState } from "./app/modules/Layout/slice/types";
import { LoginState } from "./app/modules/LoginModules/slice/types";
import { MoviesState } from "./app/modules/MoviesModule/slice/types";
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  login?: LoginState;
  layout?: LayoutState;
  movies?: MoviesState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}

export interface DecodedUserInfo {
  userInfo: {
    userId: string;
    userName: string;
  };
  iat: number;
  exp: number;
}
