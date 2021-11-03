import "./template.scss";
import play from "./svgs/play.svg";
import gsap, { Power2, Expo } from "gsap";
import { useState } from "react";

export default ({ obj, index }) => {
    const [click, setClick] = useState(false);

    const changeStyles = (e) => {
        const target = e.currentTarget;
        const playSvg = target.querySelector("#playSvg");
        const thumb = target.querySelector("#thumb");
        const gif = target.querySelector("#gif");

        if (click) {
            setClick(false);

            gsap.to(gif, {
                left: "-100%",
                display: "none",
                ease: Expo.ease,
                duration: 0.3,
            });

            gsap.to(thumb, {
                transform: "translateX(0)",
                ease: Expo.ease,
                duration: 0.3,
            });
            gsap.to(playSvg, {
                opacity: 1,
                ease: Expo.ease,
                duration: 0.2,
            });
            gsap.to(target, {
                filter: "grayscale(70%)",
                opacity: 0.8,
            });

            return;
        } else {
            gsap.to(target, {
                filter: "grayscale(0)",
                opacity: 1,
                borderLeft: "5px solid #17003f",
                ease: Expo.ease,
                duration: 0.2,
            });
            gsap.to(playSvg, {
                opacity: 0,
                ease: Expo.ease,
                duration: 0.2,
            });
            gsap.to(thumb, {
                transform: "translateX(100%)",
                ease: Expo.ease,
                duration: 0.3,
            });
            gsap.to(gif, {
                display: "block",
                left: "0%",

                ease: Expo.ease,
                duration: 0.3,
            });
        }
    };

    return (
        <div
            className="template loading"
            onClick={(e) => {
                setClick(true);
                changeStyles(e);
            }}
        >
            <div className="img">
                <img id="playSvg" loading="lazy" src={play} />
                <img
                    id="thumb"
                    src={obj.img}
                    onLoad={(e) => {
                        const target = e.currentTarget.parentNode.parentNode;
                        target.classList.remove("loading");
                    }}
                />
                <img id="gif" src={obj.gif} />
            </div>
            <div className="title">
                <span> {obj.name} </span>
            </div>
        </div>
    );
};
