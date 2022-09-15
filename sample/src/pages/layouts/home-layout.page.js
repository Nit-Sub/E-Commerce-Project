import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import HomeMenu from "../../component/common/home/menu/menu.component"
import { setCartCount } from "../../reducer/cart.reducer";

const HomePageLayout=()=>{
    const dispatch= useDispatch();
    dispatch (setCartCount({product_id:1, qty : 3}))
    return(<>
    <HomeMenu/>
    <Outlet/>
    </>)
}
export default HomePageLayout;
