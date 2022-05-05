import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_REQUEST_URL,
    headers: {
        // @ts-ignore
        Authorization: localStorage.getItem("REACT_TOKEN_AUTH"),
    },
});
