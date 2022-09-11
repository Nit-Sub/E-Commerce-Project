import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { getCategoryById } from "../../../services/category.service";

import CategoryForm from "./category-form.component";


const CategoryEdit = () => {
    let [default_value, setDefaultValues] = useState({
        title: '',
        link: '',
        status: '',
        type: "category",
        image: '',
    });
     let params = useParams();
    let navigate = useNavigate();
    const editCategory = async (data) => {
        try {
            let response=''
            // let response = await updateLabel(data,params.id);
            // api link nagareko bhayera response ko kunnei kaam garira rako chaina
            if (response.status) {
                toast.success(response.msg)
                navigate("/admin/category");
            }


            else {
                toast.error(response.msg)
            }
        }
        catch (error) {
            console.log("Edit Submit Error", error)
        }
    }
    const getCategoryDetailById = async () => {
        try {
            let id = params.id;
            let result = await getCategoryById(id);
            if (result) {

                setDefaultValues(result.result)

            }
        }
        catch (error) {

        }
    }
    useEffect(() => {
        getCategoryDetailById();
    }, [])

    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"category"}
                type="Edit"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <CategoryForm
                        data={default_value}
                        formAction={editCategory} />

                </div>
            </div>

        </div>


    </>)
}
export default CategoryEdit;

