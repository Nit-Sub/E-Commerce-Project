import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { getProductById } from "../../../services/product.service";

import ProductForm from "./product-form.component";


const ProductEdit = () => {
    let [default_value, setDefaultValues] = useState({
        title: '',
        link: '',
        status: '',
        
        image: '',
    });
     let params = useParams();
    let navigate = useNavigate();
    const editProduct = async (data) => {
        try {
            let response=''
            // let response = await updateLabel(data,params.id);
            // api link nagareko bhayera response ko kunnei kaam garira rako chaina
            if (response.status) {
                toast.success(response.msg)
                navigate("/admin/product");
            }


            else {
                toast.error(response.msg)
            }
        }
        catch (error) {
            console.log("Edit Submit Error", error)
        }
    }
    const getProductDetailById = async () => {
        try {
            let id = params.id;
            let result = await getProductById(id);
            if (result) {

                setDefaultValues(result.result)

            }
        }
        catch (error) {

        }
    }
    useEffect(() => {
        getProductDetailById();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"product"}
                type="Edit"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <ProductForm
                        data={default_value}
                        formAction={editProduct} />

                </div>
            </div>

        </div>


    </>)
}
export default ProductEdit;

