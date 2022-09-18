import { Col, Container, Row, Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import "../../../../assest/home.css"
import { getLabels } from "../../../../services/label.service"
export const CategoryListComponent = () => {
    let [brands, setBrands] = useState();
    let all_brands = async () => {
        try {
            let response = await getLabels("brand")
            if (response.status) {
                let filtered = response.result.filter((item) => item.status === 'active');
                setBrands(filtered)

            }

        }
        catch (error) {
            // inception will handle

        }
    }
    const setEqualHeights = () => {
        let elems = document.getElementsByClassName("equal_height");
        let all_height = [];
        if (elems) {
            for (let i = 0; i < elems.length; i++) {
                let first = elems[i];
                all_height.push(Number(first.clientHeight));


            }
            let max_height = Math.max(...all_height);
            let all_elms = document.getElementsByClassName('setHeight');
            if (all_elms) {
                for (let i = 0; i < all_elms.length; i++) {
                    all_elms[i].style['min-height'] = max_height + 'px'
                }
            }
        }



    }
    useEffect(() => {
        all_brands();
        setEqualHeights();
    }, [])

    return (<>

        <Row className="mt-3 brand-title">
            <Col>
                <h1 className="text-center">
                    Category Lists
                </h1>
            </Col>
        </Row>
        <hr />
        <Container fluid>
            <Row>
                <Col sm={6} md={2} lg={2} className="mb-3 equal_height" >
                    <Card className="setHeight">
                        {/* <NavLink to = {`/brand/${item.slug}`}> */}
                        <NavLink to={(e) => e.preventDefault()}>
                            <Card.Img variant="top" src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                        </NavLink>
                    </Card>
                    {/* {
                    brands && brands.map((item , index) => (
                        <Card >
                    <Card.Img variant="top" key={index} src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2017/06/apple.png?auto=format&q=60&fit=max&w=930" />
                   
                </Card>
                    ))
                } */}
                    {/* src= {process.env.REACT_APP_IMAGE_URL +'uploads'+ item.images}     data base link garechi balla chalcha*/}

                </Col>
                <Col sm={6} md={2} lg={2} className="mb-3 equal_height">
                    <Card className="setHeight">
                        <NavLink to={(e) => e.preventDefault()}>
                            <Card.Img variant="top" src="https://assets.gadgets360cdn.com/pricee/assets/brand/og-philips-logo.png" />
                        </NavLink>
                    </Card>
                </Col>
            </Row>
        </Container>



    </>)
}