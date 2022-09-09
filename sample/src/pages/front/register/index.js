
import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import { ButtonComponent, FileInput, NameInput, SelectInput } from "../../../component/input/input.component";
import { useFormik } from "formik";
import *  as Yup from "yup";
import { httpPostRequest } from "../../../services/axios.service";

const RegisterPage = () => {
  let defaultvalue = {
    name: '',
    email: '',
    password: '',
    role: '',
    image: ''

  };
  let validationSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("Name is compulsory"),
    email: Yup
      .string()
      .email()
      .required("Email is required"),
    password: Yup
      .string()
      .min(8, "Password should be character  8 long")
      .max(16, "Passsswrod should not be more than 16 characters long"),
    role: Yup
      .string()
      .required("Role is required"),

  });

  const formik = useFormik(
    {
      initialValues: defaultvalue,
      validationSchema: validationSchema,
      onSubmit: async (value) => {
        console.log("Value:", value)
        let result= await httpPostRequest('/v1/register',value,false,true);// not working sir kei error cha
        console.log(result)
      }
    }
  );


  const fileHandle = (e) => {

    let files = e.target.files[0];
    let size = files.size;

    let ext = files.name.split(".").pop();
    let allowed = ["jpg", "jpeg", "png", "bmp", 'jfif'];
    if (size <= 200000) {
      if (allowed.includes(ext.toLowerCase())) {
        formik.setValues({

          ...formik.values,
          image: files
        })
      }
      else {
        formik.setErrors({
          ...formik.errors,
          image: "Extension not allowed"
        })
      }

    } else {
      formik.setErrors({
        ...formik.errors,
        image: "Size must be less than 2 mb"
      })
    }

  }


  // console.log("value :", formik.values)
  // console.log("Error :", formik.errors)

  return (
    <>
      <Container>
        <Row className="mt-3">
          <Col>
            <h1 className="text-center">Register</h1>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col>

            <Form onSubmit={formik.handleSubmit}>
              <NameInput
                name="name"
                label="Name"
                submitChange={formik.handleChange}
                error={formik.errors.name}
              />
              <NameInput
                name="email"
                label="Email"
                submitChange={formik.handleChange}
                error={formik.errors.email}

              />

              <NameInput
                name="password"
                label="Password"
                submitChange={formik.handleChange}
                error={formik.errors.password}

              />

              <SelectInput
                label="Role"
                name="role"
                options={[
                  { label: "Customer", value: "customer" },
                  { label: "Seller", value: "seller" },


                ]

                }
                submitChange={formik.handleChange}
                error={formik.errors.role}
              />
              <FileInput
                type="file"
                name="image"
                label="Image"
                submitChange={fileHandle}
                error={formik.errors.image}
                image={formik.values.image}
              />
              <ButtonComponent
               
                submitLabel="Register" />
                
                  
            </Form>
          </Col>
        </Row>
      </Container>

    </>
  )

}
export default RegisterPage;

