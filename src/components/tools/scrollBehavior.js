const sb = (val) => {
    var i = 10;
    var int = setInterval(function () {
        window.scrollTo(0, i);
        i += 40;
        if (i >= val) clearInterval(int);
    }, 20);
};
export default sb;
