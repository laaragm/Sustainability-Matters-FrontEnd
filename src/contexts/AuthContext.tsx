import { useState, useEffect, createContext, ReactNode } from "react";

import { api } from "../services/api";

interface User {
    name: string;
    email: string;
}

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
    // const [token, setToken] = useState(
    //     "b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJzdHJpbmcifQ.CvZz7HtB2jSCBCpwOi8fm66TiCDlqhEilJj2ChoIzNE'"
    // );
    const [token, setToken] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    // useEffect(() => {
    //     async function getToken() {
    //         const response = await api.post(
    //             "login/",
    //             {},
    //             {
    //                 auth: {
    //                     // TODO: Change this
    //                     username: "string",
    //                     password: "string",
    //                 },
    //             }
    //         );
    //         const accessToken = response?.data?.token;
    //         if (accessToken != null && accessToken != undefined) {
    //             // setToken(accessToken);
    //         }
    //     }

    //     getToken();
    // }, []);

    useEffect(() => {
        saveInfoInLocalStorage();
    }, [token]);

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
            console.log("LOGIN: ", response);
            const accessToken = response?.data?.token;
            if (accessToken != null && accessToken != undefined) {
                setEmail(email);
                setToken(accessToken);
                await getUserInfo(email);
            }
        } catch (error) {
            console.log(error);
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
    };

    const getUserInfo = async (userEmail: string) => {
        const response = await api.get(`user/${userEmail}`);
        const userData = response?.data;
        setName(userData?.name);
    };

    const saveInfoInLocalStorage = () => {
        if (token?.length > 0) {
            localStorage.setItem("REACT_TOKEN_AUTH", token);
        }
    };

    const removeInfoFromLocalStorage = () => {
        localStorage.removeItem("REACT_TOKEN_AUTH");
    };

    return (
        <AuthContext.Provider value={{ token, email, name, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
