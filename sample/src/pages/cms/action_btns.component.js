import { NavLink } from "react-router-dom"
import Swal from "sweetalert2"

const ActionButtons=({id,deleteAction,editUrl})=>{
    const deleteContent=(e)=>{
        e.preventDefault();
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                
           deleteAction(id)
            }
          })

    }
    return(<>
    <NavLink to={editUrl} className={"btn btn-sm btn-success btn-circle me-3"} >
        <i className="fa fa-pen"> </i>
        

    </NavLink>
    <NavLink to ="/delete/" className={"btn btn-sm btn-danger btn-circle"}
    onClick={deleteContent}>
        <i className="fa fa-trash"></i>
    </NavLink>
    
    </>)
    

}
export default ActionButtons;