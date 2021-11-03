import "./email.scss";
import ArrowText from "../buttons/arrowText/arrowText";
import Defbutton from "../buttons/defaultButton";
import Definput from "../inputs/defaultInput.js/definp";

const Email = () => {
    const getForms = () => {
        const def = document.querySelectorAll(".definput input");
        console.log(def);
    };

    return (
        <div className="email">
            <div className="slogan">
                <h1 className="em-stagger">Let's Connect</h1>
                <p className="em-stagger">
                    If you want some thing, contact me here. This is where I
                    will always be available!
                </p>

                <ArrowText text={"Fill here"} />
            </div>
            <div className="fill">
                <h2 className="em-stagger">
                    Let's message me and make something together
                </h2>

                <form
                    className="form"
                    action="mailto:ancaprusso@hotmail.com"
                    method="post"
                >
                    <Definput placeholder={"Your name"} />
                    <Definput placeholder={"Your e-mail"} />
                    <Definput placeholder={"Project details"} />
                    <Defbutton type="submit" text={"Send!"} />
                </form>
            </div>
        </div>
    );
};

export default Email;
