import "./intro.scss";
import ArrowText from "../../buttons/arrowText/arrowText";

const Intro = ({ desc, price, data }) => {
    return (
        <div className="intro sc-stagger">
            <div>
                <p>{desc}</p>
            </div>
            <ArrowText text={price} />
        </div>
    );
};

export default Intro;
