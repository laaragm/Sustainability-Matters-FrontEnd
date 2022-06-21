import axios from "axios";
import toast from "react-hot-toast";

const apiConfig = axios.create({
    baseURL: process.env.REACT_APP_BASE_REQUEST_URL,
    headers: {
        // @ts-ignore
        Authorization: localStorage.getItem("REACT_TOKEN_AUTH"),
    },
});

apiConfig.interceptors.response.use(
    (response) => {
        return response;
    },
    // @ts-ignore
    (error: AxiosError) => {
        // @ts-ignore
        const isUnauthorized = error.response.status === 401;
        if (isUnauthorized) {
            localStorage.setItem("REACT_TOKEN_AUTH", "");
        }
        toast.error(error.response.data.message);
    }
);

export const api = apiConfig;
