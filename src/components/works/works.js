import "./works.scss";

import all from "./svgs/all.svg";
import clone from "./svgs/clone.svg";
import project from "./svgs/project.svg";

import Thumb from "./thumb/thumb";

const Works = () => {
    return (
        <div className="works">
            <div class="years">
                <h1>1 +</h1>
                <p>
                    Years <br />
                    Experience <br />
                    Work
                </p>
            </div>
            <div class="subtitle">
                Domain in cloning and create websites. Expert in javascript
                language, ReactJS Lib... and others.
            </div>
            <div class="projects">
                <Thumb
                    path="/all-my-projects"
                    icon={all}
                    title={"All my relevant projects"}
                />
                <Thumb path="/my-clones" icon={clone} title={"Clones"} />
                <Thumb
                    path="/my-personal-projects"
                    icon={project}
                    title={"Personal projects"}
                />
            </div>
        </div>
    );
};

export default Works;
