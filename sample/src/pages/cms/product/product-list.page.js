import AdminBreadCrumbs from "../../../component/common/cms/breadcrumbs";
import DataTable from 'react-data-table-component';
import { useEffect, useState } from "react";
import { deleteProductById, getProductById ,getAllProducts} from "../../../services/product.service";
import { Badge } from "react-bootstrap";
import { ucFirst } from "../../../helpers/function";
import ActionButtons from "../action_btns.component";
// import { toast } from "react-toastify";
const ProductList = () => {
    const deleteProduct=async (id)=>{
        // try{
        //     let result=  await deleteProductById();
        //     {
        //     //     if (response.status){
        //     //         toast.success(result.msg) // Api intregration pachi balla login ko valication check garera comment hatauney
        //     //         getAllProducts();
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
            deleteAction={deleteProduct}
            editUrl={"/admin/product/"+row._id}/>,  
        },
    ];
    
    const [data, setData] = useState();
    const getAllProductsDetail=async()=>{
        try{
            let response= await getAllProducts();
            if (response){
                setData(response.result)
            }

        }
        catch(error){}

    }
    


    useEffect(()=>{
        getAllProductsDetail();

    },[])
    return (<>
        <div className="container-fluid px-4">
            <AdminBreadCrumbs
                content={"product"}
                type={"list"}
                createLink='/admin/product/create'
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
export default ProductList;

