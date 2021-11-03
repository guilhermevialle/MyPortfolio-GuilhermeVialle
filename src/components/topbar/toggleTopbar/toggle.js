import "./toggle.scss";
import { useState } from "react";
import close from "../svgs/close.svg";
import menuBtn from "../svgs/menuBtn.svg";
import gsap, { Circ } from "gsap";

export default () => {
    const [click, setClick] = useState(false);

    return (
        <div
            className="toggler"
            onClick={() => {
                const togglerSvg = document.querySelector(".togglerSvg");

                if (click) {
                    setClick(false);
                    togglerSvg.src = menuBtn;
                    gsap.to(".topbar", {
                        opacity: 0,
                        display: "none",
                        ease: Circ.ease,
                        duration: 0.3,
                    });
                    return;
                }

                togglerSvg.src = close;
                gsap.to(".topbar", {
                    display: "block",
                    opacity: 1,
                    ease: Circ.ease,
                    duration: 0.3,
                });
                setClick(true);
            }}
        >
            <img src={menuBtn} className="togglerSvg" />
        </div>
    );
};
