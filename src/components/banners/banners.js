import instagram from "./svgs/instagram.svg";
import linkedin from "./svgs/linkedin.svg";
import github from "./svgs/github.svg";

const Banners = () => {
    return (
        <div className="banners">
            <div className="sm-stagger">
                <a href="https://www.instagram.com/guilherme.vialle/">
                    <img src={instagram} />
                </a>
            </div>

            <div className="sm-stagger">
                <a href="https://www.linkedin.com/in/guilherme-vialle-4b1a9820a/">
                    <img src={linkedin} />
                </a>
            </div>
            <div className="sm-stagger">
                <a href="https://github.com/guilhermevialle">
                    <img src={github} />
                </a>
            </div>
        </div>
    );
};

export default Banners;
