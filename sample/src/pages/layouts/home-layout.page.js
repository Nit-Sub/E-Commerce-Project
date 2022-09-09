import { Outlet } from "react-router-dom"
import HomeMenu from "../../component/common/home/menu/menu.component"

const HomePageLayout=()=>{
    return(<>
    <HomeMenu/>
    <Outlet/>
    </>)
}
export default HomePageLayout;
