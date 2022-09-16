import Carousel from 'react-bootstrap/Carousel';
const SliderComponent = ({ data }) => {
    return (
        data &&
        <Carousel fade>
            {
                data.map((item, key) =>
                    <Carousel.Item key ={key}>
                        <img
                            className="d-block w-100"
                            src="" // src="process.env.REACT_APP_IMAGE_URL+'/uploads/+item.image"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>)
            }


        </Carousel>
    )
}
export default SliderComponent;