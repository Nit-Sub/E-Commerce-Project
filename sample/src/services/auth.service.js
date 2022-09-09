// import axios from "axios";
import { toast } from "react-toastify";
import { httpPostRequest } from "./axios.service"

export const loginSvc =async (username, password) => {
  try {
    console.log(httpPostRequest)
    let response =  await httpPostRequest("/v1/login",{email:username, password:password},false,true);
    console.log(response)

    if (response.status) {
      localStorage.setItem('token', response.result.token);
      let user_data = {

        name: response.result.user.name,
        role: response.result.user.role,
        id: response.result.user._id
      }
      localStorage.setItem('loggedInUser', JSON.stringify(user_data));
      return response.result;
    }
    else {
      return toast.error(response.msg)
    }
    
  }
  catch (error) {
    console.log("Err login:", error);

  }
}
