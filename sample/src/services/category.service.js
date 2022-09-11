import { httpPostRequest,httpGetRequest, httpDeleteRequest, httpPutRequest } from "./axios.service"

export const createCategory= async(data)=>{
    try{
        let response= await httpPostRequest('api/v1/category',data,true,true);
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Category Error",error)
    }
}

export const getAllCategories=async ()=>{
    try{
        let response= await httpGetRequest('/v1/category');
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Get Category Error",error)
    }
}
export const getAllParents= async()=>{
    try{
        let response= await httpGetRequest('/v1/category/all-parents');
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Get Category Error",error)
    }
}

export const deleteCategoryById=async (id)=>{
    try{
        let response = await httpDeleteRequest('/v1/category/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}
export const updateCategory= async (data,id)=>{
    try{
        let response = await httpPutRequest('/v1/category/'+id,data,true,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}


}

export const getCategoryById=async (id)=>{
    try{
        let response = await httpGetRequest('/v1/category/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}