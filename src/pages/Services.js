import "../components/serviceContainer/serviceContainer.scss";
import Topbar from "../components/topbar/topbar";
import ServiceContainer from "../components/serviceContainer/serviceContainer";
import TitleSer from "../components/serviceContainer/title/title";
import repos from "../components/repos/repos";
import Ptb from "../components/paddingTopbar/ptb";

import { useEffect } from "react";
import gsap, { Expo, Circ, Elastic } from "gsap";

const Services = () => {
    const all = repos().getAll();
    const ex = all[4];
    const ex2 = all[8];
    const ex4 = all[6];

    useEffect(() => {
        gsap.from(".topbar", {
            y: -100,
            duration: 0.5,
            ease: Expo.ease,
        });

        gsap.from(".serviceContainerParent", {
            xPercent: -200,
            stagger: 0.5,
            duration: 0.8,
            delay: 0.7,
            ease: Elastic.ease,
        });

        gsap.from(".sc-stagger", {
            opacity: 0,
            yPercent: -15,
            xPercent: -15,
            stagger: 0.2,
            duration: 0.4,
            delay: 0.9,
            ease: Circ.ease,
        });
    }, []);

    return (
        <div className="services">
            <Topbar current="services" />
            <Ptb />

            <TitleSer text={"Available services"} />

            <ServiceContainer
                title={"Landing pages"}
                desc="In digital marketing, a landing page is a standalone
                 web page, created specifically for a marketing or
                  advertising campaign. It’s where a visitor “lands” after they click on a link in an email, or ads from Google, Bing, YouTube, Facebook, Instagram, Twitter, or similar places on the web."
                img={ex.img}
                price={"Negotiate before"}
            />

            <ServiceContainer
                title={"Api apps"}
                desc="API is the acronym for Application Programming Interface, which is a software intermediary 
                    that allows two applications to talk to each other.
            Each time you use an app like Facebook, send an instant message,
            or check the weather on your phone, you’re using an API.
             Given that, I also make apps that need to consume an API. In this case i use Images API to build this Photos search portal or 'Denan Gallery'. "
                img={ex2.img}
                price={"Negotiate before"}
            />

            <ServiceContainer
                title={"Portfolios"}
                desc="At its most basic form, a portfolio website provides professional information about an individual or a company and presents a showcase of their work. Like the my."
                img={
                    "https://github.com/guilhermevialle/my-portfolio/blob/master/captures/img.png?raw=true"
                }
                price={"Negotiate before"}
            />

            <ServiceContainer
                title="Common applications or components / solve bugs"
                desc="This category is suitable for creating small applications,
                 troubleshooting (front-end),
                creating layouts and components. In this example, React music player:"
                img={ex4.img}
                price={"Negotiate before"}
            />

            <ServiceContainer
                title="Algorithms"
                desc="And finally, this category is used to create different
                 types of algorithms and solutions
                for different problems and automations."
                img={
                    "https://res.cloudinary.com/practicaldev/image/fetch/s--j9Ra-Lge--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/i/h2mocxghfqg754j9851a.jpg"
                }
                price={"Negotiate before"}
            />
        </div>
    );
};

export default Services;
