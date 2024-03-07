import React, { createContext } from "react";
import { Credentials } from "./Credentials";

type Props = {
  children: React.ReactNode;
};

export const AuthContext = createContext<Credentials | null>(null);

const AuthProvider = ({ children }: Props) => {
  const [auth, setAuth] = React.useState<string>();

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const authContext = React.useContext(AuthContext);
  if (!authContext) throw new Error("No AuthContext.Provider found");

  return authContext;
};

export default AuthProvider;
