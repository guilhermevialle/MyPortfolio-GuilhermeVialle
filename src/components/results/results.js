import "./results.scss";
import Template from "../../components/template/template";

export default ({ all }) => {
    return (
        <div className="aroundRes">
            <div className="results">
                {all.map((repo, index) => {
                    return <Template index={index} obj={repo} />;
                })}
            </div>
        </div>
    );
};
