import {StatusCodes} from "http-status-codes";
import { toast } from "react-toastify";
export const errorResponse =(errorResp)=>{
    if (errorResp.response.status===StatusCodes.INTERNAL_SERVER_ERROR){
        return toast.error(errorResponse.message)
    }
    else if(errorResp.response.status===StatusCodes.UNAUTHORIZED){
        // 
    }
    else if(errorResp.response.status===StatusCodes.BAD_REQUEST){
        

        console.log("intercept",errorResp)
        // 
    }


};
 export const ucFirst =(str)=>{
    return str.charAt(0).toUpperCase()+str.slice(1);
 }
