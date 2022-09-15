import { useEffect, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import DropDownMenu from "../../dropdown-menu/drop-down-component";
import { useSelector } from "react-redux";
import { getAllCategories } from "../../../../services/category.service";
const HomeMenu = () => {
    const onExpand = () => {
    }
    let counter=useSelector((store=>{
        return store.cart.count;
    }))

    const user = JSON.parse(localStorage.getItem('loggedInUser'))?? null;



    const [catDropdown, setCatDropdown] = useState(//setDropDown baki ch
        {
            title: "Categories",
            data: [
                {
                    name: "Smart Phone",
                    slug: "/category/smartphone"
                },
                {
                    name: "Electronics",
                    slug: "/category/electronics"
                },
            ]
        }
    );
    const getActiveMenu = async  ()=>{
        try {
            let menu_item = await getAllCategories ();
            let cats_data = [];
            if (menu_item.status){
                menu_item.result.map((item)=>{
                    if (item.status==='active'){
                        cats_data.push({
                            name:item.name,
                            slug: item.slug
                        })
                    
                    }
                    setCatDropdown({
                        ...catDropdown,
                        data: cats_data
                    })

                })

            }
        }
        catch(error){}
    }
    useEffect(()=>{

        getActiveMenu();

    },[])
    const [profileMenu] = useState( // setProfileMenu baki cha
        {
            title: user?.name,
            data: [
                {
                    name: "Account",
                    slug: "/"+user?.role
                },
                {
                    name: "Change Password",
                    slug: "/category/electronics"
                },
            ]
        }
    );
    return (<>
        <Navbar variant="dark" bg="dark" expand="sm">
            <Container fluid>
                <NavLink to="/" className={"navbar-brand"} >
                    Ecom
                </NavLink>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onExpand} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <DropDownMenu data={catDropdown} id="cats"></DropDownMenu>
                        <NavLink className="nav-link" to="/contact" >Conact Us</NavLink>
                       {
                        !user &&
                        <>
                         <NavLink className="nav-link" to="/login">login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                        </>
                       }
                        <DropDownMenu data={catDropdown} />
                    </Nav>
                    <Nav className="me-auto">
                    <Nav>
            <NavLink className="nav-link" to ="/cart">Cart({counter})</NavLink>
        </Nav>
                    {
                        // user &&<>
                        <DropDownMenu data={profileMenu} />
                        //</>
                    }
                    </Nav>
                </Navbar.Collapse>



            </Container>

        </Navbar>
    </>)


}
export default HomeMenu;