import {Route, Routes} from "react-router-dom";
import Banner from "../Banner/Banner";
import MenuSlider from "../Menu/Menu";
import ContactUs from "../ContactUs/Contactus";
import Service from "../Service/sevices";
import Services from "../Service/sevices";


function AppRoute(){
    return (
        <>
        <Routes>
            <Route path="/" element={<Banner/>}></Route>
            <Route path="/menu" element={<MenuSlider/>}></Route>
            <Route path="/contact" element={<ContactUs/>}></Route>
            <Route path="/Service" element={<Services/>}></Route>
        </Routes>
        </>
    )
}

export default AppRoute