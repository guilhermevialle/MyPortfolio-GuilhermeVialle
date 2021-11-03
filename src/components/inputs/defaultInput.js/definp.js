import "./definp.scss";

const Definp = ({ placeholder }) => {
    return (
        <div className="definput em-stagger">
            <input type="text" placeholder={placeholder} />
        </div>
    );
};

export default Definp;
