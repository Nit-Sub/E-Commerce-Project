import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import {NavLink} from "react-router-dom"
import DropDownMenu from "../../dropdown-menu/drop-down-component";
const HomeMenu = () => {
    const onExpand = () => {
    }
    const user = JSON.parse(localStorage.getItem('loggedInUser'))?? null;



    const [dropdown, setDropDown] = useState(
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
    const [profileMenu, setProfileMenu] = useState(
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