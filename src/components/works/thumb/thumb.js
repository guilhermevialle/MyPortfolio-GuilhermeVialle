import { Link } from "react-router-dom";

const Thumb = ({ icon, title, path }) => {
    return (
        <div className="thumb">
            <div className="around">
                <div>
                    <img src={icon} />
                </div>
                <div>
                    <h3>{title}</h3>
                </div>
                <div>
                    <Link to={path}></Link>
                    <span>Discover more...</span>
                </div>
            </div>
        </div>
    );
};

export default Thumb;
