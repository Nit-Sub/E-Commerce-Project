
import {useParams} from "react-router-dom";

const CategoryDetailPage=()=>{
    let params=useParams();
    return(
        <>
        
        Category:{params.slug}
        </>
    )
}
export default CategoryDetailPage;
