import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux"
import { Outlet } from "react-router-dom"
import HomeMenu from "../../component/common/home/menu/menu.component"
import { setCartCount } from "../../reducer/cart.reducer";

const HomePageLayout=()=>{
    const dispatch= useDispatch();
    
    const addProductToCart=()=>{
        dispatch (setCartCount({product_id:1, qty : 3}))

    }
    return(<>
    <HomeMenu/>
    <Outlet/>
    <Button onClick={addProductToCart}> 
    Add to cart</Button>
    </>)
}
export default HomePageLayout;
