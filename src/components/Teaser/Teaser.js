import "./teaser.scss";
import { TitleContainer, ImgContainer } from "./index";
import Banners from "../banners/banners";

const Teaser = () => {
    return (
        <div className="teaser">
            <TitleContainer />
            <ImgContainer />
            <Banners />
        </div>
    );
};

export default Teaser;
