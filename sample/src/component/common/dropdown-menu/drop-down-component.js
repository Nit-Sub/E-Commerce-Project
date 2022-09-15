import { NavDropdown } from "react-bootstrap";
import {NavLink} from "react-router-dom";
const DropDownMenu = ({data}) => {
    console.log(data);
    return (
        <>
       

        <NavDropdown title={data.title} id="basic-nav-dropdown">
            {
                data.data && data.data.map((item,index) => (
                //  <NavDropdown.Item href={item.slug}>{item.name}</NavDropdown.Item>
                <NavLink className="dropdown-item" to={item.slug}key={index}>
                            {item.name}
                </NavLink>
    ))
                
            }
            
            
        </NavDropdown></>)
}
export default DropDownMenu;
