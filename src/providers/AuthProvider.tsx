import { ReactNode, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";

type AuthProviderProps = {
  children: ReactNode; //aqui to indicando que o tipo de children/app é componente react
};

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null); //criando o token que vai dizer se o user esta autenticado ou nao
  const isLoggedIn = !!token; //aqui ele diz que loggedIn é true quando tem token. indico isso com !!

  function login(token: string) {
    setToken(token); //quando loga, ele seta o token com o valor de token
  }

  function logout() {
    setToken(null); //quand desloga, ele tira
  }

  //abaixo to retornando o provider com os parametros acima
  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
