import { ucFirst } from "../../../helpers/function";
import { NavLink } from 'react-router-dom';

const AdminBreadCrumbs = ({ content, type, createLink }) => {
    return (
        <>
            <div className="mt-4">
                <h1>{ucFirst(content)} {ucFirst(type)}</h1>
                {
                    createLink&& <NavLink className="float-end btn btn-sm btn-success" to={createLink}>
                        {ucFirst(content)} Create
                    </NavLink>
                }
            </div>
            <ol class="breadcrumb mb-4">
                <li class="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li class="breadcrumb-item active">{ucFirst(content)} List</li>
            </ol></>
    )
}
export default AdminBreadCrumbs;