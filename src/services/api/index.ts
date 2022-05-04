import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_REQUEST_URL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem("REACT_TOKEN_AUTH")}`,
    },
});
