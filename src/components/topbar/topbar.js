import "./topbar.scss";
import sb from "../tools/scrollBehavior";
import arrow from "../email/svgs/arrow.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import gsap, { Elastic } from "gsap";
import Toggler from "./toggleTopbar/toggle";

const Topbar = ({ current }) => {
    window.addEventListener("scroll", () => {
        console.log(window.scrollY);

        if (window.scrollY > 68) {
            gsap.to(".topbar", {
                backgroundColor: "#FAFBFD",
                boxShadow: "rgba(0, 0, 0, 0.25) 1px 2px 5px",
                duration: 1,
                ease: Elastic.ease,
            });

            return;
        } else {
            gsap.to(".topbar", {
                backgroundColor: "#fff",
                boxShadow: "none",
                duration: 1,
                ease: Elastic.ease,
            });
            return;
        }
    });

    return (
        <>
            <Toggler />
            <div className="topbar">
                <div className="logo">
                    <Link to="/">
                        {current != "homepage" ? (
                            <>
                                <img
                                    style={{ transform: "rotateY(180deg)" }}
                                    src={arrow}
                                />
                                <span>guvi</span>
                            </>
                        ) : (
                            <span>guvi</span>
                        )}
                    </Link>
                </div>
                {current != "homepage" ? (
                    ""
                ) : (
                    <ul className="menu">
                        <li>
                            <Link to="/services"> Services</Link>
                        </li>
                        <li
                            onClick={() => {
                                sb(500);
                            }}
                        >
                            Works
                        </li>
                        <li
                            onClick={() => {
                                sb(877);
                            }}
                        >
                            Contact
                        </li>
                    </ul>
                )}
            </div>
        </>
    );
};

export default Topbar;
