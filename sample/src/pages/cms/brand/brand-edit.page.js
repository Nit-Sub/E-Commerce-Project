import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createLabel, getLabelById } from "../../../services/label.service";
import BrandForm from "./brand-form.component";


const BrandEdit = () => {
    let [default_value, setDefaultValues] = useState({
        title: '',
        link: '',
        status: '',
        type: "brand",
        image: '',
    });
     let params = useParams();
    let navigate = useNavigate();
    const editBrand = async (data) => {
        try {
            let response=''
            // let response = await updateLabel(data,params.id);
            // api link nagareko bhayera response ko kunnei kaam garira rako chaina
            if (response.status) {
                toast.success(response.msg)
                navigate("/admin/brand");
            }


            else {
                toast.error(response.msg)
            }
        }
        catch (error) {
            console.log("Edit Submit Error", error)
        }
    }
    const getElementById = async () => {
        try {
            let id = params.id;
            let result = await getLabelById(id);
            if (result) {

                setDefaultValues(result.result)

            }
        }
        catch (error) {

        }
    }
    useEffect(() => {
        getElementById();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"brand"}
                type="Edit"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <BrandForm
                        data={default_value}
                        formAction={editBrand} />

                </div>
            </div>

        </div>


    </>)
}
export default BrandEdit;

