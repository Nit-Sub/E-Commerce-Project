import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createProduct } from "../../../services/product.service";
import ProductForm from "./product-form.component";


const ProductCreate = () => {
    let default_value = {
        name: '',
      
        status: '',
        parent_cat:'',
        brands:'',
        image: '',
    }
    let navigate= useNavigate();
    const addProduct=async (data)=>{
        try{
            let response= await createProduct(data);
             // api link nagareko bhayera response ko kunnei kaam garira rako chaina
             if ( !response.status){
                toast.success(response.msg)
                navigate("/admin/product");
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
                content={"product"}
                type="create"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <ProductForm
                        data={default_value} 
                        formAction={addProduct}/>

                </div>
            </div>

        </div>


    </>)
}
export default ProductCreate;

