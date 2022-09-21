import { httpPostRequest,httpGetRequest, httpDeleteRequest, httpPutRequest } from "./axios.service"

export const createProduct= async(data)=>{
    try{
        let response= await httpPostRequest('api/v1/product',data,true,true);
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Product Error",error)
    }
}

export const getAllProducts=async ()=>{
    try{
        let response= await httpGetRequest('/v1/product');
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Get Product Error",error)
    }
}

export const getAllFeaturedProducts=async ()=>{
    try{
        let response= await httpGetRequest('/v1/product/featured');
        if  (response.status){
            return response;
        }
        
    }
    catch(error){
        console.log("Get Product Error",error)
    }
}


export const deleteProductById=async (id)=>{
    try{
        let response = await httpDeleteRequest('/v1/product/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}
export const updateProduct= async (data,id)=>{
    try{
        let response = await httpPutRequest('/v1/product/'+id,data,true,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}


}

export const getProductById=async (id)=>{
    try{
        let response = await httpGetRequest('/v1/product/'+id,true)
        if  (response.status){
            return response;
        }
        
    }
    catch(error){}

}