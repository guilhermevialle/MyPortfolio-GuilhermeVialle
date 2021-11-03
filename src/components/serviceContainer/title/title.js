import "./title.scss";

export default ({ text, style }) => {
    return (
        <h1 style={style} className="titleSer sc-stagger">
            {text}
        </h1>
    );
};
