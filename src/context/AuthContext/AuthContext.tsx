import { createContext, useContext, useState } from 'react';
import type { Usuario } from '../../types/Usuario';

type AuthContextType = {
  usuario: Usuario | null;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    if (username == 'user' && password == 'user') {
      setUsuario({
        nome: 'Usuário',
        username,
      });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
