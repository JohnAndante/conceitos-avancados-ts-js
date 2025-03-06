import { useState, useEffect } from 'react';

export const useAuth = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    const login = async (credentials: { email: string; password: string }) => {
        // Lógica de login
    };

    const logout = () => {
        // Lógica de logout
    };

    return { isAuthenticated, user, login, logout };
};
