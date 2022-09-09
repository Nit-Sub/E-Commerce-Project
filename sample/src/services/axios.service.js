import axiosInstance from "../confi/axios"



let headers={};
const getHeaders=(is_strict,form_data)=>{
    if(is_strict){
        
        let token = localStorage.getItem('token');// login server jwt
        headers['authorization']= "Bearer"+token;
    }
    if (form_data){
        headers['content-type']="multipart/form_data";
    }

}
export const httpPostRequest = async (url, data , is_strict=false, form_data=false) =>{
    getHeaders(is_strict,form_data)
    axiosInstance.post(url,data,{
        headers:{...headers}
    })
}
export const httpPutRequest = async (url, data , is_strict=false, form_data=false) =>{
    getHeaders(is_strict,form_data)
    axiosInstance.post(url,data,{
        headers:{...headers}
    })
}
export const httpGetRequest = async (url,  is_strict=false) =>{
    getHeaders(is_strict,false );
    axiosInstance.get(url , {
        headers:{...headers}
    })
}
export const httpDeleteRequest = async (url,  is_strict=false) =>{
    getHeaders(is_strict,false );
    axiosInstance.delete(url , {
        headers:{...headers}
    })
}