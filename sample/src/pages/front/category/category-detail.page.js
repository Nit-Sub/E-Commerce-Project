
import {useParams} from "react-router-dom";
import { useState } from "react";

const CategoryDetailPage=()=>{
    let params=useParams();
    let [category , setAllCategory]= useState();
    // let getCategoryDetail= async()=>{
    //     try {
    //         let response= await getProductByCategorySlug(params.slug);
    //         if(response.status)
    //         {
    //             setAllCategory(response.results)
    //         }
    //     }
    //     catch(error){}

    // }
    return(
        <>
        <p> Need Api</p>
        Category:{params.slug}
        </>
    )
}
export default CategoryDetailPage;
