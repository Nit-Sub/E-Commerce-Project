import { useFormik } from "formik";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contactus = () => {
    const formik=useFormik({
        initialValues: {
            name: "",
            email:"",
            phone:"",
            message:""
        },
        validationSchema: null,
        onSubmit: (values)=>{
            console.log(values)
            // api call
            // back end email function  from node mailler

        }
    });
    return (
        <>
            <Container>
                <Row my="5">
                    <Col sm="12" md="6">
                        <h1> Contact Us</h1>
                        <hr/>
                        <form  onSubmit={formik.handleSubmit}>
                        <Form.Group className='row mb-3'>
                <Form.Label className='col-sm-3'> Name:</Form.Label>
                <Col sm={9}>



                    <Form.Control
                        name="name"
                        placeholder="Enter   Name.."
                        size="sm"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.name &&
                        <span className="text-danger"> {formik.errors.name}</span>
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Email:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="email"
                        type="email"
                        placeholder="Enter Your email.."
                        size="sm"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.email &&
                        <span className="text-danger"> {formik.errors.email}</span>
                    }
                </Col>
           </Form.Group>
           <Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Phone:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="phone"
                        type="tel"
                        placeholder="Enter Your phone.."
                        size="sm"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.phone &&
                        <span className="text-danger"> {formik.errors.phone}</span>
                    }
                </Col>
           </Form.Group>
          < Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Message:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="message"
                        as="textarea"
                        placeholder="Enter Your message.."
                        size="sm"
                        value={formik.values.message}
                        onChange={formik.handleChange}
                        rows={"8"}
                    />
                    {
                        formik.errors.message &&
                        <span className="text-danger"> {formik.errors.message}</span>
                    }
                </Col>
           </Form.Group>
           <Form.Group className= " row mb-3">
            <Col sm= {{offset : 3 , span:9}}> 
            <Button variant ="danger" type =" reset" onClick={(e)=>{
                formik.setValues({name: "",
                email:"",
                phone:"",
                message:""})
            }}  className={"me-3"}>
                Cancel
            </Button>
            <Button variant="success" type="submit" >Submit</Button>
            
            </Col>

           </Form.Group>

                        </form>
                    </Col>
                    <Col sm="12" md="6">
                    <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14132.120342600374!2d85.34480800000001!3d27.68546499999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x167d008efb47d64c!2sBroadway%20Infosys!5e0!3m2!1sen!2snp!4v1663248724503!5m2!1sen!2snp" width="100%"  style={{border:"0px", height:"100vh"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </Col>
                </Row>


            </Container>

        </>
    )
}
export default Contactus;