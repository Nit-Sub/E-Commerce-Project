import "../../assest/admin.css"
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Outlet } from "react-router-dom";
import AdminTopNav from "../../component/common/cms/top-nav.component";
import AdminSidebaar from "../../component/common/cms/sidebar.component";
import AdminFooter from "../../component/common/cms/admin-footer.component";

const AdminLayout = () => {
    
    return (<> 
        < AdminTopNav/>
        <div id="layoutSidenav">
            <AdminSidebaar/>
            <div id="layoutSidenav_content">
                <main>
                    <Outlet />
                </main>
                <AdminFooter/>
            </div>
        </div>
    </>

    )
}
export default AdminLayout;
