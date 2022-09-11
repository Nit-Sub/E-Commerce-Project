import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createLabel } from "../../../services/label.service";
import BrandForm from "./brand-form.component";


const BrandCreate = () => {
    let default_value = {
        title: '',
        link: '',
        status: '',
        type: "brand",
        image: '',
    }
    let navigate= useNavigate();
    const addBrand=async (data)=>{
        try{
            let response= await createLabel(data);
             // api link nagareko bhayera response ko kunnei kaam garira rako chaina
             if ( !response.status){
                toast.success(response.msg)
                navigate("/admin/brand");
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
                content={"brand"}
                type="create"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <BrandForm
                        data={default_value} 
                        formAction={addBrand}/>

                </div>
            </div>

        </div>


    </>)
}
export default BrandCreate;

