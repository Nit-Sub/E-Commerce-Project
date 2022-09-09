import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createLabel } from "../../../services/label.service";
import BannerForm from "./banner-form.component";



const BannerCreate = () => {
    let default_value = {
        title: '',
        link: '',
        status: '',
        type: "banner",
        image: '',
    }
    let navigate= useNavigate();
    const addBanner=async (data)=>{
        try{
            let response= await createLabel(data);
             // api link nagareko bhayera response ko kunnei kaam garira rako chaina
             if ( !response.status){
                toast.success(response.msg)
                navigate("/admin/banner");
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
                content={"banner"}
                type="create"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <BannerForm
                        data={default_value} 
                        formAction={addBanner}/>

                </div>
            </div>

        </div>


    </>)
}
export default BannerCreate;

