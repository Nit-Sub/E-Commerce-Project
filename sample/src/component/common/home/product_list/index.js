import { useState } from "react"
import { Col, Container,Row } from "react-bootstrap";
import SingleProductComponent from "../single-product";


export const ProductListComponent =({product})=>{
    let [allProducts , setAllProducts]= useState();
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
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
                <Col sm={6} md={3} className="mb-4" >
                    <SingleProductComponent/>
                </Col>
            </Row>
        </Container>
        </>
    )
    }