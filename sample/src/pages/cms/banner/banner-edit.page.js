import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import { createLabel, getLabelById } from "../../../services/label.service";
import BannerForm from "./banner-form.component";



const BannerEdit = () => {
    let [default_value, setDefaultValues] = useState({
        title: '',
        link: '',
        status: '',
        type: "banner",
        image: '',
    });
     let params = useParams();
    let navigate = useNavigate();
    const editBanner = async (data) => {
        try {
            let response=''
            // let response = await updateLabel(data,params.id);
            // api link nagareko bhayera response ko kunnei kaam garira rako chaina
            if (response.status) {
                toast.success(response.msg)
                navigate("/admin/banner");
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
                content={"banner"}
                type="Edit"


            />
            <div class="card mb-4">
                <div class="card-body">

                    <BannerForm
                        data={default_value}
                        formAction={editBanner} />

                </div>
            </div>

        </div>


    </>)
}
export default BannerEdit;

