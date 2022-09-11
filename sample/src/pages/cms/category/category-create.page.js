import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createCategory } from "../../../services/category.service";
import CategoryForm from "./category-form.component";


const CategoryCreate = () => {
    let default_value = {
        name: '',
      
        status: '',
        parent_cat:'',
        brands:'',
        image: '',
    }
    let navigate= useNavigate();
    const addCategory=async (data)=>{
        try{
            let response= await createCategory(data);
             // api link nagareko bhayera response ko kunnei kaam garira rako chaina
             if ( !response.status){
                toast.success(response.msg)
                navigate("/admin/category");
             } 

        
        else{
                toast.error(response.msg)
        }}
        catch(error){
            console.log("Create Submit Error",error)
        }
    }
  

    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"category"}
                type="create"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <CategoryForm
                        data={default_value} 
                        formAction={addCategory}/>

                </div>
            </div>

        </div>


    </>)
}
export default CategoryCreate;

