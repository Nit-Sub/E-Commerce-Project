import { useCallback, useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap";
import SingleProductComponent from "../single-product";
import { getAllFeaturedProducts } from "../../../../services/product.service";


export const ProductListComponent = ({ product }) => {
    let [allProducts, setAllProducts] = useState();
    const getAllProducts = useCallback(async () => {
        try {
            let response = await getAllFeaturedProducts();
            if (response.status) {
                setAllProducts(response.result);

            }
        }
        catch (error) {

        }
    }, [])
    useEffect(() => {
        getAllProducts();
    }, [getAllProducts])
    return (
        <>

            <Row className="mt-3 brand-title">
                <Col>
                    <h1 className="text-center">
                        All Product List
                    </h1>
                </Col>
            </Row>
            <Container fluid>
                <Row>
                    {
                        allProducts && allProducts.map((item, index) => (
                            <Col sm={6} md={3} className="mb-4" key={index} >
                                <SingleProductComponent
                                    detail={item} />
                            </Col>
                        ))
                    }
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                    <Col sm={6} md={3} className="mb-4" >
                        <SingleProductComponent />
                    </Col>
                </Row>
            </Container>
        </>
    )
}