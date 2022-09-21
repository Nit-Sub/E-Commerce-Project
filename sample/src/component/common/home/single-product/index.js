import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const SingleProductComponent = ({ detail }) => {
    return (
        <>
            <Card>
                <NavLink to="/product/test"> 
                {/* product slug value pass garney need database connection */}
                    <Card.Img src="https://www.publicdomainpictures.net/pictures/280000/nahled/not-found-image-15383864787lu.jpg">
                        {/* //<Card.Img src={process.env.REACT_APP_IMAGE_URL+'/uploads/'+detail.image[0]} style={maxHeight:255px}> */}


                    </Card.Img>
                </NavLink>
                {/* <Card.Body>                             // Api call
                    <h4>{detail?.name.subString(0,30)+"..."}</h4>
                    <p>Npr. {<Numeric format>} &nbsp;<del className="text-danger">20000</del></p>
                    <Button variant="warning" size="sm">
                        Add To Cart

                    </Button>
                </Card.Body> */}
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