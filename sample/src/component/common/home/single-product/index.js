import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const SingleProductComponent = ({ product }) => {
    return (
        <>
            <Card>
                <NavLink to="/product/test">
                    <Card.Img src="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg">

                    </Card.Img>
                </NavLink>
                <Card.Body>
                    <h4>Product Name</h4>
                    <p>Npr. 10000 &nbsp;<del className="text-danger">20000</del></p>
                    <Button variant="warning" size="sm">
                        Add To Cart

                    </Button>
                </Card.Body>


            </Card>

        </>
    )
}
export default SingleProductComponent;