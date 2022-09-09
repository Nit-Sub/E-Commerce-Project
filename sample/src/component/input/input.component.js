import { Col, Form,Button } from "react-bootstrap";

export const NameInput = ({ name, label, type = "text",submitChange,error }) => {
  
  return (
    <>
      <Form.Group className="row mb-3">
        <Form.Label className="col-sm-3">
          {label}:
        </Form.Label>
        <Col sm={9}>
          <Form.Control
            type="text"
            name={name}
            required
            placeholder={`Enter Your ${name}`}
            size="sm"
            onChange={submitChange}

          />
          {
            error&& <span className="text-danger"> {error} </span>
          }</Col>
      </Form.Group>
    </>
  )
}

export const FileInput = ({ type, name, label ,submitChange,error,image}) => {
  return (<>
    <Form.Group className="row mb-3">
      <Form.Label className="col-sm-3">
        Image:
      </Form.Label>
      <Col sm={4}>
        <Form.Control
          type={type}
          name={name}
          label={label}
          
          onChange={submitChange}
          size="sm"
          

        />
        {
          error&& <span className="text-danger">{error}</span>
        }</Col>
        <Col sm={3}>
          {
            image&& <img src={URL.createObjectURL(image)} alt="null" className="img img-fluid"/>
          }
        </Col>
    </Form.Group>


  </>)
}

export const SelectInput = ({ label,name,options,error,submitChange}) => {
  return (
    <Form.Group className="row mb-3">
      <Form.Label className="col-sm-3">

        Role:

      </Form.Label>
      <Col sm={9}>
        <Form.Select name={name} required size="sm"
          onChange={submitChange}>
          <option> ---Select any one---</option>
          {
            options && options.map((item,key)=>(
              <option 
              value={item.vaule} key={key}>
                {item.label}

              </option>
            ))
         }
          
        
        </Form.Select>
        
        {
          error&& <span className="text-danger">{error}</span>
        }

      </Col>


    </Form.Group>)
}


export const ButtonComponent =({showCancel=true,submitLabel})=>{
  return(<>
  <Form.Group className="row mb-3">
  <Col sm={{span:9 , offset:3}}>
    { showCancel &&
    <Button variant="danger" size="sm"> Cancel</Button>}
    <Button type="submit" variant="success" className="mx-3" size="sm"> {submitLabel}</Button>
  </Col>

</Form.Group>
</>)
}