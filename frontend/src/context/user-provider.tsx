import { getCurrentUser } from "@/lib/getCurrentUser";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const authContext = createContext<any>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  console.log(user, loading);

  useEffect(() => {
    getCurrentUser().then((user: any) => {
      setUser(user);
      setLoading(false);
    });
  }, []);

  return (
    <authContext.Provider value={{ user, setUser, loading, setLoading }}>
      {children}
    </authContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(authContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
