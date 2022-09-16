import { Col, Container, Row, Card, Button } from "react-bootstrap"
import "../../../../assest/home.css"
export const BrandListComponent = () => {
    return (<>

        <Row className="mt-3 brand-title">
            <Col>
                <h1 className="text-center">
                    Brand Lists
                </h1>
            </Col>
        </Row>
        <hr />
        <Container fluid>
            <Row sm={6} md={3} lg={6}>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
                <Col>
                <Card >
                    <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                    
                </Card>
                
                </Col>
            </Row>
        </Container>



    </>)
}