import { httpPostRequest,httpGetRequest, httpDeleteRequest, httpPutRequest } from "./axios.service"

export const createLabel= async(data)=>{
    try{
        let response= await httpPostRequest('api/v1/label',data,true,true);
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Label Error",error)
    }
}

export const getLabels=async (type)=>{
    try{
        let response= await httpGetRequest('/v1/label?type='+type);
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Get Label Error",error)
    }
}

export const deleteLabelById=async (id)=>{
    try{
        let response = await httpDeleteRequest('/v1/label/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}
export const updateLabel= async (data,id)=>{
    try{
        let response = await httpPutRequest('/v1/label/'+id,data,true,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}


}

export const getLabelById=async (id)=>{
    try{
        let response = await httpGetRequest('/v1/label/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}