import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { Form, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import * as Yup from "yup";
import Select from 'react-select'
import { getAllParents } from "../../../services/category.servce";
const CategoryForm = ({ data, formAction }) => {
    const validationSchema = Yup.object().shape({
        name: Yup.string().required("Name is required"),

        status: Yup.string().required("Status is required")

    });
    let [parent_cats, setParentCats]=useState([]);
    const [brands, setBrands]= useState([]);


    const formik = useFormik(
        {
            initialValues: data,
            validationSchema: validationSchema,
            onSubmit: (values) => {
                let form_data = new FormData();
                if (values.image && typeof (formik.values.image) === "object"
                ) {
                    form_data.append("image", values.image, values.image.name);
                    delete values.image;
                }
                else {
                    delete values.image;
                }

                if(values.brands){
                    let all_brands= values.brands.map((item)=>item.value);
                    values.brand= all_brands;

                    }
                

                Object.keys(values).map((key) => (
                    form_data.append(key, values[key])
                ))
                formAction(form_data);


            }
        }
    );
    const getParentCats=async ()=>{
        try {
            let all_parent_cats= await getAllParents();
            if (all_parent_cats.status){
                setParentCats(all_parent_cats.results)
            }

        }
        catch(error){

        }
    }
    const getAllBrands = async ()=>{
        try{
           // let all_brands = await getLabels('brand');
           let all_brands=""// api intregation nagareko bhayera khali pass gardi rakheko front end ma error nachodos bhanera
            if (all_brands.status){
                let brand_str = all_brands.result.map((item)=>{
                    return{
                        label: item.title,
                        value : item._id
                    }
                })
                setBrands(brand_str);
            }
        }
        catch(error){}
    }
    useEffect(() => {
        getParentCats();
        getAllBrands()
        if (data){
            let sel_brand ={};
            if (data.brands){
             sel_brand=     brands.map((item)=>{
               // if (){}// day 50 last 5 to 10 min check garney

             })
            }
        formik.setValues({
            ...formik.values,
            ...data
        }
        )}

    }, [data]);

    return (<>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Group className='row mb-3'>
                <Form.Label className='col-sm-3'> Name:</Form.Label>
                <Col sm={9}>



                    <Form.Control
                        name="name"
                        placeholder="Enter  Category name.."
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
                <Form.Label className='col-sm-3'> Parent Category:</Form.Label>
                <Col sm={9}>
                    <Form.Select
                        name="parent_cat"
                        size="sm"
                        value={formik.values.parent_cat}
                        onChange={formik.handleChange}
                    >
                        <option value=""> --Select any one-- </option>
                        {
                            parent_cats&& parent_cats.map((item, index)=>{
                                <option value={item._id} key= {index} > {
                                    item.name
                                }</option>

                            })
                        }

                    </Form.Select>
                    {
                        formik.errors.parent_cat &&
                        <span className="text-danger"> {formik.errors.parent_cat}</span>
                    }
                </Col>
            </Form.Group>
            <Form.Group className="row mb-3">
                <Form.Label className='col-sm-3'> Brands:</Form.Label>
                <Col sm={9}>
                    <Select options={brands}
                        isMulti
                        name="brands"
                        size="sm"
                        value={formik.values.brands}

                        onChange={(e)=>{
                            formik.setValues({
                                ...formik.values,
                                brands: e
                            })



                        }} />

                    {
                        formik.errors.brands &&
                        <span className="text-danger"> {formik.errors.brands}</span>
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
                        formik.values.image && typeof (formik.values.image) === "object" ?

                            <img className="image image-fluid" src={URL.createObjectURL(formik.values.image)} alt='' />
                            :
                            <img className="image image-fluid" src={process.env.REACt_APP_IMAGE_URL + '/uploads' + formik.values.image} alt='' />

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
export default CategoryForm;