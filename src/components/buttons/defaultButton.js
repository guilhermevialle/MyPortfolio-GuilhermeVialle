import "./defaultButton.scss";

const defaultButton = ({ text, func, current, type }) => {
    return (
        <div>
            {current == "contact" ? (
                <button
                    type={type}
                    onClick={() => {
                        func(877);
                    }}
                    className="defbutton titleStagger"
                >
                    {text}
                </button>
            ) : (
                <button
                    onClick={() => {
                        const forms = document.querySelector(".form");
                        const name = forms.elements[0].value;
                        const email = forms.elements[1].value;
                        const details = forms.elements[2].value;

                        console.log([name, email, details]);
                    }}
                    className="defbutton em-stagger"
                >
                    {text}
                </button>
            )}
        </div>
    );
};

export default defaultButton;
