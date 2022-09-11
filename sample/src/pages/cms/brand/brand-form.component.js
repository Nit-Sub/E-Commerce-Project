import { useFormik } from "formik";
import { useEffect } from "react";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
const BrandForm = ({ data, formAction }) => {
    const validationSchema = Yup.object().shape({
        title: Yup.string().required("Title is required"),
        link: Yup.string().required("Link is required"),
        status: Yup.string().required("Status is required")

    });



    const formik = useFormik(
        {
            initialValues: data,
            validationSchema: validationSchema,
            onSubmit: (values) => {
                let form_data = new FormData();
                if ( values.image &&typeof (formik.values.image)=== "object"
                ) {
                    form_data.append("image", values.image, values.image.name);
                    delete values.image;
                }
                else{
                    delete values.image;
                }
                
                Object.keys(values).map((key) => (
                    form_data.append(key, values[key])
                ))
                formAction(form_data);


            }
        }
    );
    useEffect(()=>{
        formik.setValues({
            ...formik.values,
            ...data}
        )
        
    },[data]);

    return (<>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='row mb-3'>
                <Form.Label className='col-sm-3'> Title:</Form.Label>
                <Col sm={9}>



                    <Form.Control
                        name="title"
                        placeholder="Enter  Brand title.."
                        size="sm"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.title &&
                        <span className="text-danger"> {formik.errors.title}</span>
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Link:</Form.Label>
                <Col sm={9}>
                    <Form.Control
                        name="link"
                        type="url"
                        placeholder="Enter Brand link.."
                        size="sm"
                        value={formik.values.link}
                        onChange={formik.handleChange}
                    />
                    {
                        formik.errors.link &&
                        <span className="text-danger"> {formik.errors.link}</span>
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Status:</Form.Label>
                <Col sm={9}>
                    <Form.Select
                        name="status"
                        size="sm"
                        value={formik.values.status}
                        onChange={formik.handleChange}
                    >
                        <option> --Select any one-- </option>
                        <option value={"active"}>Active</option>
                        <option value="inactive">Inactive</option>
                    </Form.Select>
                    {
                        formik.errors.status &&
                        <span className="text-danger"> {formik.errors.status}</span>
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className=" col-sm-3">
                    Image

                </Form.Label>
                <Col sm={3}>
                    <Form.Control
                        type="file"
                        size="sm"
                        name="image"
                        onChange={(e) => {
                            let file = e.target.files[0];
                            formik.setValues({
                                ...formik.values,
                                image: file
                            })


                        }} />
                    {
                        formik.errors.file && 
                        <span className='text-danger'>{formik.errors.file} </span>

                    }
                </Col>
                <Col sm={3} >
                    {
                        formik.values.image&& typeof(formik.values.image)==="object"?
                       
                        <img className="image image-fluid" src={URL.createObjectURL(formik.values.image)} alt='' />
                        :
                        <img className="image image-fluid" src={process.env.REACt_APP_IMAGE_URL+'/uploads'+formik.values.image} alt='' />
                        
                    }
                </Col></Form.Group>
            <Form.Group className="row mb-3">
                <Col
                    sm={{
                        offset: 3,
                        span: 9
                    }

                    }>
                    <Button variant="danger" size="sm" type="reset" className="me-3"  >
                        <i className="fa fa-trash"></i> Reset</Button>
                    <Button variant="success" size="sm" type="submit">
                        <i className="fa fa-paper-plane"></i> Submit

                    </Button>
                </Col>


            </Form.Group>







        </Form>

    </>)
}
export default BrandForm;