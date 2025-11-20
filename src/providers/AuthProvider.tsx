import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthProviderProps = {
  children: ReactNode; //aqui to indicando que o tipo de children/app é componente react
};
const AUTH_STORAGE_KEY = "@auth_token";
export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | null>(null); //criando o token que vai dizer se o user esta autenticado ou nao
  const isLoggedIn = !!token; //aqui ele diz que loggedIn é true quando tem token. indico isso com !!

  async function login(token: string) {
    try {
      await AsyncStorage.setItem(AUTH_STORAGE_KEY, token);
    } catch (error) {
      console.log(`ERRO AO PERSISTIR O ESTADO DE LOGIN`, error);
    }
    setToken(token); //quando loga, ele seta o token com o valor de token
  }

  async function logout() {
    await AsyncStorage.removeItem(AUTH_STORAGE_KEY);
    setToken(null); //quand desloga, ele tira
  }

  useEffect(() => {
    async function loadStorageData() {
      try {
        const storedToken = await AsyncStorage.getItem(AUTH_STORAGE_KEY);
        if (storedToken) {
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
    <AuthContext.Provider value={{ token, isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
