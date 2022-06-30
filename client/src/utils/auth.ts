import jwtDecode, { JwtPayload } from "jwt-decode";
import { DecodedUserInfo } from "../rootState";

export const auth = {
  setToken(token: string): void {
    sessionStorage.setItem("user_token", token);
  },
  getToken(): string | null {
    let token: string | null = "";
    if (sessionStorage.getItem("user_token")) {
      token = sessionStorage.getItem("user_token");
    }
    if (token) {
      return token;
    } else {
      this.logout();
      return null;
    }
  },
  logout() {
    sessionStorage.removeItem("user_token");
  },
  getUserData(): DecodedUserInfo | null {
    const token = this.getToken();
    if (token) {
      try {
        return jwtDecode(token ? token : "");
      } catch {
        return null;
      }
    }
    return null;
  },
  isLogin(): boolean {
    const token = this.getToken();
    if (token !== null) {
      const { exp }: JwtPayload = jwtDecode(token);
      if (exp && Date.now() >= exp * 1000) {
        this.logout();
        return false;
      }
      return true;
    }
    return false;
  },
};
