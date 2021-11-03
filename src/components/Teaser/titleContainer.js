import Defbutton from "../buttons/defaultButton";
import sb from "../tools/scrollBehavior";

const title = () => {
    return (
        <div className="title">
            <div className="titleStagger">
                <h2>
                    Guilherme <br /> <span>Vialle</span>
                </h2>
            </div>

            <div className="meDesc titleStagger">
                <span>Self-taught JavaScript and React developer. </span>
                <span>Back-end skills still working in progress...</span>
            </div>

            <Defbutton text={"Contact Me"} func={sb} current="contact" />
        </div>
    );
};

export default title;
