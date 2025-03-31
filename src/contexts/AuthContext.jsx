import { createContext, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (email, password) => {
    // Mock authentication - in a real app, this would call an API
    setUser({ email });
    navigate('/');
  };

  const signup = (email, password) => {
    // Mock signup
    setUser({ email });
    navigate('/');
  };

  const logout = () => {
    setUser(null);
    navigate('/thank-you');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}