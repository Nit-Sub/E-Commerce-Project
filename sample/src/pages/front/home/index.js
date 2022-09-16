
import { getLabels } from "../../../services/label.service"
import { useEffect, useState } from 'react';
import SliderComponent from '../../../component/slider/slider.component';

const LandingPage = () => {
    const [banner, setBanner] = useState();


    const getAllBanners = async () => {
        try {
            let all_banners = await getLabels("banner");
            if (all_banners.status) {
                let active_banners = all_banners.result.filter((item) => item.status === 'active')
                setBanner = active_banners
            }
        }
        catch (error) {

        }
    }
    useEffect(() => {
        getAllBanners();
    }, [])
    return (
        <>


            <SliderComponent
                data={banner} />




        </>
    )
}
export default LandingPage;