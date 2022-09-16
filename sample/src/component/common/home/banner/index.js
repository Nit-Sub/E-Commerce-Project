// import { getLabels } from "../../../../services/label.service"
// import { useEffect, useState } from 'react';
import SliderComponent from "../../../slider/slider.component"
export const BannerComponent =({banner})=>{
  // const [banner, setBanner] = useState();


    // const getAllBanners = async () => {
    //     try {
    //         let all_banners = await getLabels("banner");
    //         if (all_banners.status) {
    //             let active_banners = all_banners.result.filter((item) => item.status === 'active')
    //             setBanner = active_banners
    //         }
    //     }
    //     catch (error) {

    //     }
    // }
    // useEffect(() => {
    //     getAllBanners();
    // }, [])
    return (
        <>


            <SliderComponent
                //data={banner}
                 />



        </>
    )
}