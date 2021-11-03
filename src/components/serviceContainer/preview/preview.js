import "./preview.scss";

export default ({ img, data }) => {
    return (
        <div className="parentPreview sc-stagger">
            <div className="preview loading">
                <img
                    src={img}
                    onLoad={(e) =>
                        e.currentTarget.parentNode.classList.remove("loading")
                    }
                />
            </div>
        </div>
    );
};
