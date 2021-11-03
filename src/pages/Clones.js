import Topbar from "../components/topbar/topbar";
import Results from "../components/results/results";
import projects from "../components/repos/repos";
import Ptb from "../components/paddingTopbar/ptb";

import { useEffect } from "react";
import gsap, { Expo, Bounce } from "gsap";

export default () => {
    const all = [...projects().clones];

    useEffect(() => {
        gsap.from(".topbar", {
            y: -100,
            duration: 0.5,
            ease: Expo.ease,
        });

        gsap.from(".template", {
            xPercent: 15,
            yPercent: 15,
            duration: 0.3,
            stagger: 0.1,
            ease: Bounce.easeIn,
        });
    }, []);

    return (
        <div className="allmyprojects">
            <Topbar />
            <Ptb />
            <Results all={all} />
        </div>
    );
};
