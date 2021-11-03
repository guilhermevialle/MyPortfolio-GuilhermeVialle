import "./arrowText.scss";
import arrow from "../../email/svgs/arrow.svg";

export default ({ text }) => {
    return (
        <div className="arrow em-stagger">
            <span>{text}</span>
            <img src={arrow} />
        </div>
    );
};
