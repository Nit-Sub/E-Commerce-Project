import axios from "axios";
import { errorResponse } from "../helpers/function";

const axiosInstance= axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout:30000,
    timeoutErrorMessage:"Server time out",
    headers:{
        "content-type":"application/json"
    }});
axiosInstance.interceptors.response.use(
    (response)=>{
        console.log("InterceptREsponse :", response);
    },
    (errResponse)=>{
        errorResponse(errResponse);});
export default axiosInstance;