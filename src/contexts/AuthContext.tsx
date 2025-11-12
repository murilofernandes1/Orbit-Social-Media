import { createContext } from "react";

type AuthContextData = {
  token: string | null;
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};
export const AuthContext = createContext<AuthContextData | undefined>(
  undefined
);
