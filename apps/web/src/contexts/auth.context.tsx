import * as React from "react";
import Cookies from "js-cookie";
import { LoginResponse } from "@/pages/Login";

interface AuthContextType {
  authTokens: LoginResponse | null;
  login: (tokens: LoginResponse) => void;
  logout: () => void;
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [authTokens, setAuthTokens] = React.useState<LoginResponse | null>(
    null,
  );

  const login = (tokens: LoginResponse) => {
    setAuthTokens(tokens);
    Cookies.set("accessToken", tokens.accessToken, {
      secure: true,
      httpOnly: true,
    });

    Cookies.set("refreshToken", tokens.refreshToken, {
      secure: true,
      httpOnly: true,
    });
  };

  const logout = () => {
    setAuthTokens(null);
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  };

  return (
    <AuthContext.Provider value={{ authTokens, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
