import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { jwtDecode } from "jwt-decode";

type JwtPayload = {
  id?: string;
};

type AuthProviderProps = {
  children: ReactNode; //aqui to indicando que o tipo de children/app é componente react
};
const AUTH_STORAGE_KEY = "@auth_token";

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null); //criando o token que vai dizer se o user esta autenticado ou nao
  const isLoggedIn = !!token; //aqui ele diz que loggedIn é true quando tem token. indico isso com !!
  const [userId, setUserId] = useState<string | null>(null);

  async function login(token: string) {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, token);

      const decoded = jwtDecode<JwtPayload>(token);

      const idFromToken = decoded.id || null;

      setUserId(idFromToken);
      setToken(token);
    } catch (error) {
      console.log(`ERRO AO PERSISTIR O ESTADO DE LOGIN`, error);
    }
  }

  async function logout() {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    setToken(null); //quand desloga, ele tira
    setUserId(null);
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedToken = await AsyncStorage.getItem(AUTH_STORAGE_KEY);

        if (storedToken) {
          const decoded = jwtDecode<JwtPayload>(storedToken);
          const idFromToken = decoded.id || null;

          setUserId(idFromToken);
          setToken(storedToken);
        }
      } catch (error) {
        console.log("ERRO AO CARREGAR O TOKEN", error);
      }
    }

    loadStorageData();
  }, []);

  //abaixo to retornando o provider com os parametros acima
  return (
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout, userId }}>
      {children}
    </AuthContext.Provider>
  );
}
