
import { Button, Container, FormControl, FormGroup } from "react-bootstrap";
import SliderComponent from "../../../component/slider/slider.component";

const ProductDetail = () => {
    return (
        <>
            <Container >
                <Row className="mt-3">
                    <Col sm={12} md={6}>
                        <SliderComponent
                            data={[{
                                link: "",
                                images: "" //ShownoImage import garera slider component ma ani teslai onError ma rakhera ani pathauney
                            }
                            ]} />
                    </Col>
                    <Col sm={12} md={6}>
                        <h1 className="text-center"> Product Name Goes Here </h1>
                        <hr />
                        <p>
                            <strong> Category:</strong>
                        </p>
                        <p>
                            <strong> Brand :</strong>
                            brand 1 , brand 2
                        </p>
                        <p>
                            <strong> Price:</strong>
                            Nrp 1000
                            &nbsp;
                            <del className="text-danger"> 1,500 </del>
                        </p>
                        <Row>
                            <form>
                                <FormGroup>
                                    <Col sm="4">
                                        Add To Cart
                                    </Col>
                                    <Col sm={4} >
                                        <FormControl
                                            name="qty"
                                            type="number"
                                            size="sm"
                                            min="0"
                                            required
                                            onChange={(e) => {
                                                console.log(e.target.value)
                                            }}
                                        />
                                    </Col>
                                    <Col sm={4} className="d-grid ">
                                        <Button type="button" variant="warning" size="sm">
                                            Add to cart

                                        </Button>
                                    </Col>

                                </FormGroup>
                            </form>
                        </Row>

                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={12} >
                        <h4> Description</h4>
                        <hr />

                    </Col>
                </Row>
                <Row className="mt-3">

                    <Col sm={12}><h4>
                        Related Products
                    </h4>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ProductDetail;