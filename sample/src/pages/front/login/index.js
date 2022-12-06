import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginSvc } from "../../../services/auth.service";
import "./login.css"
const LoginPage = () => {
  let [data, setData] = useState({
    email: '',
    password: ''
  })
  let [err, setErr] = useState({
    email: '',
    password: ''
  })

  let navigate = useNavigate();
  const handleChange = (e) => {
    let { value, name } = e.target;
    setData(
      {
        ...data,
        [name]: value
      }

    )
    validateData(name, value);
  }
  const validateData = (field, value) => {
    let msg = "";
    switch (field) {
      case "username":
        msg = value ? "" : "Username is required";
        break;
      case "password":
        msg = value ? (value.length < 8 ? 'Password need to be 8 character long' : "") : "Password is required";
        break;
      // no default
      default:
        break;
    }
    setErr({
      ...err,
      [field]: msg
    })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();

    let result = await loginSvc(data.email, data.password);
    if (result) {
      toast.success("welcome to cms portal")
      navigate("/" + result.user.role)
    }
    // TODO: API call garney yesma

  }
  useEffect(() => {
    let token = localStorage.getItem('token');
    let logged_in_user = JSON.parse(localStorage.getItem('loggedInUser'));
    if (token & logged_in_user) {
      navigate("/" + logged_in_user['role'])
    }
  }, [navigate]);

  return (
    <>
      <Container>
        <Row className="my-3">
          <Col>
            <h4 className="text-center">Login</h4>
            <hr />
          </Col>
        </Row>
        <Row>
          <Col sm={12}>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3"> UserName:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="email"
                    name="email"
                    required
                    size="sm"
                    placeholder="Please Enter Your UserName....."
                    onChange={handleChange}
                  />
                  {
                    err && err.username &&
                    <span className="text-danger">{err.username}</span>
                  }
                </Col>

              </Form.Group>
              <Form.Group className="row mb-3">
                <Form.Label className="col-sm-3"> Password:</Form.Label>
                <Col sm={9}>
                  <Form.Control
                    type="password"
                    name="password"
                    required
                    size="sm"
                    placeholder="Please Enter Your Password....."
                    onChange={handleChange}
                  />
                  {
                    err && err.password &&
                    <span className="text-danger">{err.username}</span>
                  }
                </Col>

              </Form.Group>
              <Form.Group className="row mb-3">

                <Col sm={{ offset: 3 }}>
                  <Button variant="danger" type="reset" size="sm" >
                    Cancel
                  </Button>
                  <Button variant="success" type="submit" size="sm" className="mx-3" >
                    Submit
                  </Button>
                </Col>

              </Form.Group>



            </Form>
            <p>Or</p>
            <NavLink className='btn-link' to="/register">Register</NavLink>
          </Col>
        </Row>
      </Container>




    </>

  );
}
export default LoginPage;
