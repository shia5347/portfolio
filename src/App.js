"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var defaultGalleryProps = {
    galType: 'Illustrations'
};
function AppendGallery(props) {
    if (props.galType === "Illustrations") {
        return (react_1.default.createElement("div", { id: "gallery" },
            react_1.default.createElement("img", { src: "img/illustrations/woman.png" }),
            react_1.default.createElement("img", { src: "img/illustrations/ff.png" })));
    }
    else if (props.galType === "Pixelart") {
        return (react_1.default.createElement("div", { id: "gallery" },
            react_1.default.createElement("img", { src: "img/pixelart/Omeshicha.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/AnimeMom.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/Mario32x32.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/MarioMockup.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/NiceLogo.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/HorseAsbaran.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/Mockup2.png" })));
    }
}
function Navigation() {
    var _a = (0, react_1.useState)("Illustrations"), gallery = _a[0], setGallery = _a[1];
    var hash = window.location.hash;
    (0, react_1.useEffect)(function () {
        switch (hash) {
            case "#Illustrations":
                setGallery("Illustrations");
                break;
            case "#PixelArt":
                setGallery("Pixelart");
                break;
        }
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "navContainer" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Illustrations", onClick: function () { return setGallery("Illustrations"); } }, "Illustrations")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#PixelArt", onClick: function () { return setGallery("Pixelart"); } }, "PixelArt")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#OilPaintings" }, "OilPaintings")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Software" }, "Software")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#About" }, "About")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Contact" }, "Contact"))),
            react_1.default.createElement(AppendGallery, { galType: gallery }))));
}
function MyApp() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h1", { id: "title" }, "Shahroz Khan"),
        react_1.default.createElement(Navigation, null)));
}
exports.default = MyApp;
