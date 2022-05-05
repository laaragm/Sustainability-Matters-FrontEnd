import { useState, useEffect, createContext, ReactNode } from "react";

import { api } from "../services/api";

interface TokenContextType {
    token: string;
}

interface TokenContextProviderProps {
    children: ReactNode;
}

export const TokenContext = createContext({} as TokenContextType);

export function TokenContextProvider({ children }: TokenContextProviderProps) {
    const [token, setToken] = useState("");

    useEffect(() => {
        async function getToken() {
            const response = await api.post(
                "login/",
                {},
                {
                    auth: {
                        // TODO: Change this
                        username: "string",
                        password: "string",
                    },
                }
            );
            const accessToken = response?.data?.token;
            if (accessToken != null && accessToken != undefined) {
                setToken(accessToken);
            }
        }

        getToken();
    }, []);

    useEffect(() => {
        saveInfoInLocalStorage();
    }, [token]);

    const saveInfoInLocalStorage = () => {
        if (token) {
            localStorage.setItem("REACT_TOKEN_AUTH", token);
        }
    };

    return (
        <TokenContext.Provider value={{ token }}>
            {children}
        </TokenContext.Provider>
    );
}
