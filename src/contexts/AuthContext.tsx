import { useState, useEffect, createContext, ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { api } from "../services/api";
import { PATHS } from "../routes/paths";

interface AuthContextType {
    token: string;
    name: string;
    email: string;
    logout: () => void;
    login: (email: string, password: string) => void;
}

interface AuthContextProviderProps {
    children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
    const accessToken = localStorage.hasOwnProperty("REACT_TOKEN_AUTH")
        ? localStorage.getItem("REACT_TOKEN_AUTH") || ""
        : "";
    const userEmail = localStorage.hasOwnProperty("REACT_EMAIL_AUTH")
        ? localStorage.getItem("REACT_EMAIL_AUTH") || ""
        : "";
    const userName = localStorage.hasOwnProperty("REACT_NAME_AUTH")
        ? localStorage.getItem("REACT_NAME_AUTH") || ""
        : "";
    const [token, setToken] = useState(accessToken);
    const [email, setEmail] = useState(userEmail);
    const [name, setName] = useState(userName);
    let navigate = useNavigate();

    useEffect(() => {
        saveTokenInLocalStorage();
    }, [token]);

    useEffect(() => {
        saveEmailInLocalStorage();
    }, [email]);

    useEffect(() => {
        saveNameInLocalStorage();
    }, [name]);

    useEffect(() => {
        if (localStorage.getItem("REACT_TOKEN_AUTH")?.length === 0) {
            toast.error("Your session has expired. Please login again.");
            logout();
        }
    }, [localStorage.getItem("REACT_TOKEN_AUTH")]);

    const login = async (email: string, password: string) => {
        try {
            const response = await api.post(
                "login/",
                {},
                {
                    auth: {
                        username: email,
                        password: password,
                    },
                }
            );
            const accessToken = await response?.data?.token;
            if (accessToken?.length > 0 && accessToken != undefined) {
                // @ts-ignore
                api.defaults.headers["Authorization"] = accessToken;
                setEmail(email);
                setToken(accessToken);
                await getUserInfo(email);
            }
        } catch (error) {
            throw error;
        }
    };

    const putVariablesInInitialState = () => {
        setToken("");
        setEmail("");
        setName("");
    };

    const logout = () => {
        removeInfoFromLocalStorage();
        putVariablesInInitialState();
        navigate(PATHS.login.route);
    };

    const getUserInfo = async (userEmail: string) => {
        const response = await api.get(`user/${userEmail}`);
        const userData = response?.data;
        setName(userData?.name);
    };

    const saveTokenInLocalStorage = () => {
        if (token?.length > 0) {
            localStorage.setItem("REACT_TOKEN_AUTH", token);
        }
    };

    const saveEmailInLocalStorage = () => {
        if (email?.length > 0) {
            localStorage.setItem("REACT_EMAIL_AUTH", email);
        }
    };

    const saveNameInLocalStorage = () => {
        if (name?.length > 0) {
            localStorage.setItem("REACT_NAME_AUTH", name);
        }
    };

    const removeInfoFromLocalStorage = () => {
        localStorage.removeItem("REACT_TOKEN_AUTH");
        localStorage.removeItem("REACT_EMAIL_AUTH");
        localStorage.removeItem("REACT_NAME_AUTH");
        localStorage.clear();
    };

    return (
        <AuthContext.Provider value={{ token, email, name, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
