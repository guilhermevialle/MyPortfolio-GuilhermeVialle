import Topbar from "../components/topbar/topbar";
import Teaser from "../components/Teaser/Teaser";
import Works from "../components/works/works";
import Email from "../components/email/email";
import Ptb from "../components/paddingTopbar/ptb";

import { useEffect } from "react";
import gsap, { Expo, Bounce, Circ } from "gsap";

const Homepage = () => {
    useEffect(() => {
        gsap.from(".topbar", {
            y: -100,
            duration: 0.5,
            ease: Expo.ease,
        });

        gsap.from(".titleStagger", {
            opacity: 0,
            yPercent: -20,
            stagger: 0.2,
            duration: 1,
            delay: 0.3,
            ease: Circ.ease,
        });

        gsap.from(".sm-stagger", {
            xPercent: 75,
            opacity: 0,
            stagger: 0.2,
            duration: 0.3,
            delay: 0.7,
            ease: Bounce.easeOut,
        });

        gsap.from(".circle", {
            xPercent: 100,
            duration: 0.4,
            delay: 0.3,
            ease: Bounce.ease,
        });

        gsap.from(".subtitle", {
            xPercent: 75,
            opacity: 0,
            ease: Circ.ease,
            duration: 0.4,
            delay: 0.6,
            delay: 0.8,
        });

        gsap.from(".years", {
            xPercent: -100,
            opacity: 0,
            ease: Circ.ease,
            duration: 0.4,
            delay: 1,
        });

        gsap.from(".thumb", {
            xPercent: 150,
            opacity: 0,
            stagger: 0.4,
            ease: Circ.ease,
            duration: 0.3,
            delay: 1,
        });

        gsap.from(".em-stagger", {
            opacity: 0,
            x: -15,
            y: -15,
            stagger: 0.2,
            duration: 0.2,
            ease: Bounce.easeIn,
            delay: 1.3,
        });
    }, []);

    return (
        <div className="Homepage">
            <Topbar current="homepage" />
            <Ptb />
            <Teaser />
            <Works />
            <Email />
        </div>
    );
};

export default Homepage;
