"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_2 = require("@pixi/react");
const pixi_js_1 = require("pixi.js");
const defaultGalleryProps = {
    galType: 'Illustrations'
};
function Title({ title }) {
    const textStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Roboto',
        fontSize: 90
    });
    const titleArr = title.split('');
    //Calculate first letter position
    const titleLength = title.length;
    const titleLengthPixels = titleLength / 2;
    const titleSpacing = 40;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Text, { text: "S", anchor: 0.5, x: window.innerWidth / 2 - titleLengthPixels * titleSpacing, y: 80, style: textStyle }),
        react_1.default.createElement(react_2.Text, { text: "n", anchor: 0.5, x: window.innerWidth / 2 + titleLengthPixels * titleSpacing, y: 80, style: textStyle })));
}
function PixiApp() {
    return (react_1.default.createElement("div", { id: "pixiApp" },
        react_1.default.createElement(react_2.Stage, { width: window.innerWidth, height: window.innerHeight, options: { backgroundColor: 0xffffff } },
            react_1.default.createElement(Title, { title: "Shahroz Khan" }))));
}
function AppendGallery(props) {
    if (props.galType === "Illustrations") {
        return (react_1.default.createElement("div", { id: "gallery" },
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
    const [gallery, setGallery] = (0, react_1.useState)("Illustrations");
    var hash = window.location.hash;
    (0, react_1.useEffect)(() => {
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
                    react_1.default.createElement("a", { href: "#Illustrations", onClick: () => setGallery("Illustrations") }, "Illustrations")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#PixelArt", onClick: () => setGallery("Pixelart") }, "PixelArt")),
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
        react_1.default.createElement(Navigation, null),
        react_1.default.createElement(PixiApp, null)));
}
exports.default = MyApp;
//# sourceMappingURL=App.js.map