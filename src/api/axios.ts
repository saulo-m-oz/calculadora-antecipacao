import axios from "axios";

//BASE AXIOS INSTANCE WITH URL TO FETCH REQUESTS
export const API = axios.create({
    baseURL: "https://frontend-challenge-7bu3nxh76a-uc.a.run.app",
    timeout: 1000
});