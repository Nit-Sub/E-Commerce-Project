import { BannerComponent } from "../../../component/common/home/banner";
import { BrandListComponent } from "../../../component/common/home/brand-list";
import { CategoryListComponent } from "../../../component/common/home/category";
import { ProductListComponent } from "../../../component/common/home/product_list";


const LandingPage = () => {
    return(
        <>
        <BannerComponent/>
        <BrandListComponent/>
        <CategoryListComponent/>
        <ProductListComponent/>
        </>
    )
   
}
export default LandingPage;