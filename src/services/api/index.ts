import axios from "axios";

export const api = axios.create({
    baseURL: process.env.REACT_APP_BASE_REQUEST_URL,
    // TODO: Change this
    headers: {
        Authorization: `Bearer b'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJwdWJsaWNfaWQiOiJzdHJpbmciLCJleHAiOjE2NTE2NzQxNTZ9.e0_ueK2C2T5x5VL38MTZe4YNS0AV7375N_awyNhuERk'
    `,
    },
});
