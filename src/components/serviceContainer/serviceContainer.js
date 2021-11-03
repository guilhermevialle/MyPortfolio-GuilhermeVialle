import TitleSer from "./title/title";
import Intro from "./intro/intro";
import Preview from "./preview/preview";

export default ({ title, desc, img, price }) => {
    return (
        <div className="serviceContainerParent">
            <TitleSer text={title} />
            <div className="serviceContainer">
                <Intro desc={desc} price={price} />
                <Preview img={img} />
            </div>
        </div>
    );
};
