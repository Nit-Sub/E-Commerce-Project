import Carousel from 'react-bootstrap/Carousel';
//import {Col} from "react-bootstrap"
const SliderComponent = ({  }) => {// data lai probes lina parcha yesma
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
                            src="https://image.shutterstock.com/image-vector/image-not-found-grayscale-photo-600w-1737334631.jpg" // src="process.env.REACT_APP_IMAGE_URL+'/uploads/+item.image"
                            alt="First slide"
                            height={300}
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </a>
                    </Carousel.Item>
                  
                
            


        </Carousel>

    )
}
export default SliderComponent;