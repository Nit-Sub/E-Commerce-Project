import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { deleteCategoryById, getCategoryById ,getAllCategories} from "../../../services/category.servce";
import { Badge } from "react-bootstrap";
import { ucFirst } from "../../../helpers/function";
import ActionButtons from "../action_btns.component";
// import { toast } from "react-toastify";
const CategoryList = () => {
    const deleteCategory=async (id)=>{
        // try{
        //     let result=  await deleteCategoryById();
        //     {
        //     //     if (response.status){
        //     //         toast.success(result.msg) // Api intregration pachi balla login ko valication check garera comment hatauney
        //     //         getAllCategories();
        //     //     }
        //     // }
        // }
        // catch(error)
        // {}

        
    }
    const columns = [
        { 
            name: 'Title',
            selector: row => row.name,
            sortable: true,
        },
        { 
            name: 'Parent',
            selector: row => row.parent_cat ?.name,
            sortable: true,
        },
        { 
            name: 'Brand',
            selector: row => row.brands?row.brands.map((item)=> item.title).join(','):'',
            sortable: true,
        },
        {
            name: 'Image',
            selector: row => row.image,
            sortable : true,
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
            deleteAction={deleteCategory}
            editUrl={"/admin/category/"+row._id}/>,  
        },
    ];
    
    const [data, setData] = useState();
    const getAllCategoriesDetail=async()=>{
        try{
            let response= await getAllCategories();
            if (response){
                setData(response.result)
            }

        }
        catch(error){}

    }
    


    useEffect(()=>{
        getAllCategoriesDetail();

    },[])
    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"category"}
                type={"list"}
                createLink='/admin/category/create'
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
export default CategoryList;

