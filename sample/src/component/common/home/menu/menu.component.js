import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import DropDownMenu from "../../dropdown-menu/drop-down-component";
import { useSelector } from "react-redux";
const HomeMenu = () => {
    const onExpand = () => {
    }
    let counter=useSelector((store=>{
        return store.cart.count;
    }))

    const user = JSON.parse(localStorage.getItem('loggedInUser'))?? null;



    const [dropdown] = useState(//setDropDown baki ch
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
                <Navbar.Brand href="/home" onClick={(e) => {
                    e.preventDefault();
                }}>
                    E Home
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={onExpand} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink className="nav-link" to="/" >Home</NavLink>
                       {
                        !user &&
                        <>
                         <NavLink className="nav-link" to="/login">login</NavLink>
                        <NavLink className="nav-link" to="/register">Register</NavLink>
                        </>
                       }
                        <DropDownMenu data={dropdown} />
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