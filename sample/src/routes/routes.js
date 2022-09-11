import {BrowserRouter, Route, Routes} from "react-router-dom";
import ErrorPage from "../pages/front/error/404.error";
import HomePageLayout from "../pages/layouts/home-layout.page";
import FrontPage from "../pages/front";
import AdminLayout from "../pages/layouts/admin-layout.page";
import AdminPages from "../pages/cms";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
//import {ROLES} from "../confi/constants"





// const AdminPrivateRoute=({component})=>{
//   let token= localStorage.getItem('token');
//   let user= JSON.parse(localStorage.getItem('loggedInUser')) || null;
//   let is_logged_in=token && user ? true: false;
//   if (is_logged_in){
//     //let user login in
//     if (user.role===ROLES.AdminDashboard){
//       return component;
//     } else {
//       return <Navigate to ={'/'+user.role}/>
//     }
//   }
//   else{
//     //not logged in
//     return <Navigate to="/login"/>
//   }
// }

const RouterComponent=()=>{
  return(
    <>
    <BrowserRouter>
    <ToastContainer/>
    <Routes> 
    <Route path="/" element={<HomePageLayout/>}>   
      <Route index element={<FrontPage.LandingPage/>}></Route>
      <Route path="login" element={<FrontPage.LoginPage/>}></Route>
      <Route path ="category/:slug" element ={ <FrontPage.CategoryPage.CategoryDetailPage/> }></Route>
      <Route path="register" element={<FrontPage.RegisterPage/>}></Route>
      
      <Route path ="*" element ={ <ErrorPage/> }></Route>
      </Route>
    <Route path="/admin" element={<AdminLayout/>}>
      <Route index element={<AdminPages.AdminDashboard/>}/>
      
      <Route path="banner" element={<AdminPages.Banner.BannerList/>}/>
      <Route path="banner/create" element={<AdminPages.Banner.BannerCreate/>}/>
      <Route path="banner/:id" element={<AdminPages.Banner.BannerEdit/>}/>
      
      <Route path="brand" element={<AdminPages.Brand.BrandList/>}/>
      <Route path="brand/create" element={<AdminPages.Brand.BrandCreate/>}/>
      <Route path="brand/:id" element={<AdminPages.Brand.BrandEdit/>}/>

      <Route path="category" element={<AdminPages.Category.CategoryList/>}/>
      <Route path="category/create" element={<AdminPages.Category.CategoryCreate/>}/>
      <Route path="category/:id" element={<AdminPages.Category.CategoryEdit/>}/>
      
      </Route>  
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default RouterComponent; 