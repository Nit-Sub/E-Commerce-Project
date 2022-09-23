import Carousel from 'react-bootstrap/Carousel';
//import {Col} from "react-bootstrap"
const SliderComponent = ({ }) => {// data lai probes lina parcha yesma
    return (
        // data &&
        // <Carousel fade>
        //     {
        //         data.map((item, key) =>
        //          <a>
        //              <Carousel.Item key ={key}>
        //                 <img
        //                     className="d-block w-100"
        //                     src="" // src="process.env.REACT_APP_IMAGE_URL+'/uploads/+item.image"
        //                     alt="First slide"
        // onError ={shownoImage}
        //                 />
        //                 <Carousel.Caption>
        //                     <h3>First slide label</h3>
        //                     <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        //                 </Carousel.Caption>
        //             </Carousel.Item>
        //          </a>  
        //         )
        //     }


        // </Carousel>



        <Carousel fade>


            <Carousel.Item >
                <a href="youtube.com">
                    <img
                        className="d-block w-100"
                        src="https://htmlcolorcodes.com/assets/images/colors/gray-color-solid-background-1920x1080.png" // src="process.env.REACT_APP_IMAGE_URL+'/uploads/+item.image"
                        alt="First slide"
                        height={300}
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p> UnderDevelopment</p>
                    </Carousel.Caption>
                </a>
            </Carousel.Item>





        </Carousel>

    )
}
export default SliderComponent;