
import React, { createContext, useContext, useState, useEffect } from 'react';
import api from '../services/api'; // Our new api service
import { toast } from 'react-hot-toast';

// 1. Create the Context
const AuthContext = createContext();

// 2. Create the Provider
export function AuthProvider({ children }) {
  // 3. Define the State
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // To check auth status on load

  // 4. Check if user is already logged in (on app load)
  useEffect(() => {
    const storedUser = localStorage.getItem('userInfo');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // 5. Define Auth Functions (Login, Signup, Logout)

  const login = async (email, password) => {
    try {
      // Use our 'api' service to make the request
      const { data } = await api.post('/auth/login', { email, password });
      
      // Save user to state
      setUser(data);
      // Save user to local storage
      localStorage.setItem('userInfo', JSON.stringify(data));
      
      toast.success('Logged in successfully!');
      return true; // Indicate success
    } catch (error) {
      toast.error(error.response?.data?.message || 'Invalid email or password');
      return false; // Indicate failure
    }
  };

  const signup = async (name, email, password) => {
    try {
      const { data } = await api.post('/auth/register', { name, email, password });

      setUser(data);
      localStorage.setItem('userInfo', JSON.stringify(data));
      
      toast.success('Signed up successfully!');
      return true; // Indicate success
    } catch (error) {
      toast.error(error.response?.data?.message || 'Signup failed');
      return false; // Indicate failure
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userInfo');
    toast.success('Logged out successfully!');
  };

  // 6. Make values available to children
  const value = {
    user,
    loading,
    login,
    signup,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// 7. Create a custom hook for easy access
export const useAuth = () => {
  return useContext(AuthContext);
};