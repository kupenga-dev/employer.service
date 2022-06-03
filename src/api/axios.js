import axios from "axios";
const BASE_URL = "https://employee-service-app.herokuapp.com/";
export default axios.create({
    baseURL: BASE_URL
});
export const axiosAuth = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Authorization-token": localStorage.getItem('authorization_token')
    }
});