import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Determine backend URL (env or default to localhost:5000)
  // In a real Vite app, use import.meta.env.VITE_API_URL
  const API_URL = '/api/auth';

  useEffect(() => {
    checkUserLoggedIn();
  }, []);

  // Check if user is logged in
  const checkUserLoggedIn = async () => {
    try {
      // We expect credentials to be included (cookies)
      // fetch options: credentials: 'include'
      // Note: In a real CORS scenario, we need credentials: 'include'
      // Since backend runs on 5000 and frontend on 3000
      const res = await fetch(`${API_URL}/verify`, { credentials: 'include' });

      if (res.ok) {
        const data = await res.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Auth check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  // Register
  const register = async (userData) => {
    try {
      const res = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error en registro');
      }

      return data;
    } catch (error) {
      throw error;
    }
  };

  // Login
  const login = async (emailOrUsername, password) => {
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Important for setting the cookie
        body: JSON.stringify({ emailOrUsername, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Error en inicio de sesión');
      }

      setUser(data);
      return data;
    } catch (error) {
      throw error;
    }
  };

  // Logout
  const logout = async () => {
    try {
      await fetch(`${API_URL}/logout`, {
          method: 'POST',
          credentials: 'include'
      });
      setUser(null);
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
