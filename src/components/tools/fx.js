import simpleParallax from "simple-parallax-js";

const Fx = () => {
    const getEl = (string) => {
        return new simpleParallax(document.querySelectorAll(string));
    };
};

export default Fx;
