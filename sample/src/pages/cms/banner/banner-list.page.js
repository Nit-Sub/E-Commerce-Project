import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { deleteLabelById, getLabels } from "../../../services/label.service";
import { Badge } from "react-bootstrap";
import { ucFirst } from "../../../helpers/function";
import ActionButtons from "../action_btns.component";
import { toast } from "react-toastify";

const BannerList = () => {
    const deletebanner=async (id)=>{
        // try{
        //     let result=  await deleteLabelById();
        //     {
        //     //     if (response.status){
        //     //         toast.success(result.msg) // Api intregration pachi balla login ko valication check garera comment hatauney
        //     //         getAllBanners();
        //     //     }
        //     // }
        // }
        // catch(error)
        // {}

        
    }
    const columns = [
        { 
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
            sortable : true,
        },
        {
            name: 'Link',
            selector: row =><a href={row.link} target="_new">{row.link}</a>,
        },
        {
            name: 'Status',
            selector: row => <Badge bg={row.status ==='active'? 'success':'danger'}>{ucFirst(row.status)}</Badge>,
            sortable: true
        },
        {
            name: 'Action',
            selector: row => 
            <ActionButtons
            id={row._id}
            deleteAction={deletebanner}
            editUrl={"/admin/banner/"+row._id}/>,  
        },
    ];
    const [data, setData] = useState();
    const getAllBanners=async()=>{
        try{
            let response= await getLabels("banner");
            if (response){
                setData(response.result)
            }

        }
        catch(error){}

    }
    


    useEffect(()=>{
        getAllBanners();

    },[])
    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"banner"}
                type={"list"}
                createLink='/admin/banner/create'
            />
            <div class="card mb-4">
                <div class="card-body">
                    <DataTable
                        columns={columns}
                        data={data}
                        pagination
                    />


                </div>
            </div>

        </div>


    </>)
}
export default BannerList;

