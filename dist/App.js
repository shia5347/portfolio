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
const SOUND = __importStar(require("@pixi/sound"));
const ratio = window.innerWidth / window.innerHeight;
const reducerPlain = (_, { data }) => data;
const app = new pixi_js_1.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
});
const defaultPageProps = {
    pagType: 'Illustrations'
};
var mouseX;
var mouseY;
document.addEventListener("mousemove", (event) => {
    mouseX = event.screenX;
    mouseY = event.screenY;
});
function Title({ title }) {
    var posY = 75;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    const [motion, update] = (0, react_1.useReducer)(reducerPlain, null);
    const textStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Roboto-Regular',
        fontSize: 90,
        fill: 'white'
    });
    const activeTextStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Roboto-Regular',
        fontSize: 90,
        stroke: 'red',
        strokeThickness: 2,
        fill: 'white'
    });
    const titleArr = title.split('');
    //Calculate first letter position
    const titleLength = title.length;
    const titleLengthPixels = titleLength / 2;
    const titleSpacing = 55;
    const letterPositionsArr = [
        { x: windowWidth / 2 - titleLengthPixels * titleSpacing, y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: windowHeight - (windowHeight - posY), char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing)), y: windowHeight - (windowHeight - posY), char: textStyle }
    ];
    var hMax = windowHeight - (windowHeight - posY + 20);
    var g = 9.8;
    //Physics properties for each letter
    const letterPhysicsArr = [
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: windowHeight - (windowHeight - posY + 20), floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: windowHeight - (windowHeight - posY + 20), floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: hMax, tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: windowHeight - (windowHeight - posY), vMax: Math.sqrt(2 * hMax * g), hoverable: true }
    ];
    const [letterPositions, setLetterPositions] = (0, react_1.useState)(letterPositionsArr);
    const [letterPhysics, setLetterPhysics] = (0, react_1.useState)(letterPhysicsArr);
    const [stopPlaying, setStopPlaying] = (0, react_1.useState)(false);
    //const titleMask = new Graphics()
    //titleMask.beginFill(0x000000)
    //titleMask.drawRect(0,0,windowWidth,150)
    var bubbleSound = SOUND.Sound.from('../src/audio/bubble.wav');
    const drawBgRect = (0, react_1.useCallback)((g) => {
        g.clear();
        g.beginFill(0x000000);
        g.drawRect(0, 0, windowWidth, 150);
        setLetterPositions([
            { x: windowWidth / 2 - titleLengthPixels * titleSpacing, y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: windowHeight - (windowHeight - posY), char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing)), y: windowHeight - (windowHeight - posY), char: textStyle }
        ]);
    }, [windowWidth, windowHeight]);
    var letterIndex = 0;
    (0, react_2.useTick)((delta) => {
        //If mouseX is greater than x at i and < x at i+1; Raise element at i 
        const targetFrameRate = 60;
        var normalizedDelta = delta / (1000 / targetFrameRate);
        /*
        document.addEventListener("mousemove",(event) => {
        
                if(mouseX > letterPositions[letterPositions.length-1].x && mouseX < letterPositions[letterPositions.length-1].x+20) {
                if(stopPlaying === false)
                    bubbleSound.play()
                setStopPlaying(true)
                } else {
        
                setStopPlaying(false)
                }
        
        })
        */
        function bounce(i) {
            //While max height is above 0	
            if (letterPhysics[i].hMax > 0.01) {
                if (letterPhysics[i].freeFall) {
                    letterPhysics[i].hNew = letterPhysics[i].h - letterPhysics[i].v * normalizedDelta - 0.5 * letterPhysics[i].g * (normalizedDelta * normalizedDelta);
                    letterPositions[i].y = letterPhysics[i].hNew;
                    setLetterPositions(letterPositions);
                    if (letterPhysics[i].hNew > letterPhysics[i].floor) {
                        letterPhysics[i].t = letterPhysics[i].tLast + 2 * Math.sqrt(2 * letterPhysics[i].hMax / letterPhysics[i].g);
                        letterPhysics[i].tLast = letterPhysics[i].t + letterPhysics[i].cTime;
                        letterPhysics[i].freeFall = false;
                        letterPhysics[i].h = letterPhysics[i].floor;
                    }
                    else {
                        letterPhysics[i].t += normalizedDelta;
                        letterPhysics[i].v -= letterPhysics[i].g * normalizedDelta;
                        letterPhysics[i].h = letterPhysics[i].hNew;
                    }
                }
                else {
                    letterPhysics[i].t = letterPhysics[i].t + letterPhysics[i].cTime;
                    letterPhysics[i].vMax = letterPhysics[i].vMax * letterPhysics[i].cr;
                    letterPhysics[i].v = letterPhysics[i].vMax;
                    letterPhysics[i].freeFall = true;
                    letterPhysics[i].h = letterPhysics[i].floor;
                }
                letterPhysics[i].hMax = 0.5 * letterPhysics[i].vMax * letterPhysics[i].vMax / letterPhysics[i].g;
                setLetterPhysics(letterPhysics);
            }
        }
        //Click handler
        document.addEventListener('click', (e) => {
            for (let i = 0; i < letterPositions.length; i++) {
                if (mouseX > letterPositions[i].x && mouseX < letterPositions[i].x + 70) {
                    letterPhysics[i].hoverable = false;
                    letterPhysics[i].freeFall = true;
                }
            }
        });
        for (let i = 0; i < letterPositions.length; i++) {
            //If jumping of the letter is finished, then reset it's values
            if (letterPhysics[i].hMax <= 0.01) {
                letterPhysics[i] = letterPhysicsArr[i];
                setLetterPhysics(letterPhysics);
            }
            if (letterPhysics[i].hoverable === false) {
                bounce(i);
            }
            if (mouseX > letterPositions[i].x && mouseX < letterPositions[i].x + 70) {
                letterPositions[i].char = activeTextStyle;
                if (letterPositions[i].y > hMax && letterPhysics[i].hoverable) {
                    letterPositions[i].y -= normalizedDelta * 80;
                    setLetterPositions(letterPositions);
                }
            }
            else {
                letterPositions[i].char = textStyle;
                if (letterPositions[i].y < letterPhysics[i].floor && letterPhysics[i].hoverable) {
                    letterPositions[i].y += normalizedDelta * 80;
                    setLetterPositions(letterPositions);
                }
            }
        }
        update({
            type: 'update',
            data: {},
        });
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_2.Graphics, { draw: drawBgRect }),
        react_1.default.createElement(react_2.Text, { text: "S", anchor: 0.5, x: letterPositions[0].x, y: letterPositions[0].y, style: letterPositions[0].char }),
        react_1.default.createElement(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[1].x, y: letterPositions[1].y, style: letterPositions[1].char }),
        react_1.default.createElement(react_2.Text, { text: "a", anchor: 0.5, x: letterPositions[2].x, y: letterPositions[2].y, style: letterPositions[2].char }),
        react_1.default.createElement(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[3].x, y: letterPositions[3].y, style: letterPositions[3].char }),
        react_1.default.createElement(react_2.Text, { text: "r", anchor: 0.5, x: letterPositions[4].x, y: letterPositions[4].y, style: letterPositions[4].char }),
        react_1.default.createElement(react_2.Text, { text: "o", anchor: 0.5, x: letterPositions[5].x, y: letterPositions[5].y, style: letterPositions[5].char }),
        react_1.default.createElement(react_2.Text, { text: "z", anchor: 0.5, x: letterPositions[6].x, y: letterPositions[6].y, style: letterPositions[6].char }),
        react_1.default.createElement(react_2.Text, { text: "K", anchor: 0.5, x: letterPositions[7].x, y: letterPositions[7].y, style: letterPositions[7].char }),
        react_1.default.createElement(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[8].x, y: letterPositions[8].y, style: letterPositions[8].char }),
        react_1.default.createElement(react_2.Text, { text: "a", anchor: 0.5, x: letterPositions[9].x, y: letterPositions[9].y, style: letterPositions[9].char }),
        react_1.default.createElement(react_2.Text, { text: "n", anchor: 0.5, x: letterPositions[10].x, y: letterPositions[10].y, style: letterPositions[10].char })));
}
function PixiApp() {
    const [width, setWidth] = (0, react_1.useState)(window.innerWidth);
    const [height, setHeight] = (0, react_1.useState)(window.innerHeight);
    window.addEventListener('resize', () => {
        if (window.innerWidth > width && window.innerHeight > height) {
            console.log('ZOOMED OUT');
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        else {
            if (window.innerWidth < width && window.innerHeight < height) {
                console.log('ZOOMED IN');
                setWidth(window.innerWidth);
                setHeight(window.innerHeight);
            }
        }
    });
    return (react_1.default.createElement("div", { id: "pixiApp" },
        react_1.default.createElement(react_2.Stage, { width: width, height: height, options: { backgroundAlpha: 0 } },
            react_1.default.createElement(Title, { title: "Shahroz Khan" }))));
}
function AppendPage(props) {
    if (props.pagType === "Illustrations") {
        return (react_1.default.createElement("div", { id: "gallery" }));
    }
    else if (props.pagType === "Pixelart") {
        return (react_1.default.createElement("div", { id: "gallery" },
            react_1.default.createElement("img", { src: "img/pixelart/Omeshicha.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/AnimeMom.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/Mario32x32.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/MarioMockup.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/NiceLogo.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/HorseAsbaran.png" }),
            react_1.default.createElement("img", { src: "img/pixelart/Mockup2.png" })));
    }
    else if (props.pagType === "About") {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("h1", { id: "subTitle" }, "About Me"),
            react_1.default.createElement("img", { src: "img/myFace.jpg", id: "myFace" }),
            react_1.default.createElement("p", { id: "aboutMeText" }, "Hi! I am a hobbyist game developer with knowledge both in web development and software development. I have a strong passion for art beyond just my games and enjoy experimenting with math equations to get cool effects in my software."),
            react_1.default.createElement("p", { id: "aboutMeText" }, "I have participated in many game jams (which are hackathons but for video game projects) and created many other projects beyond just that. My favorite programming languages are c++ and typescript."),
            react_1.default.createElement("p", { id: "aboutMeText" }, "I am looking forward to designing new innovative games in the future and commercializing my creative works.")));
    }
}
function Navigation() {
    const [page, setPage] = (0, react_1.useState)("Illustrations");
    var hash = window.location.hash;
    (0, react_1.useEffect)(() => {
        switch (hash) {
            case "#Illustrations":
                setPage("Illustrations");
                break;
            case "#PixelArt":
                setPage("Pixelart");
                break;
            case "#About":
                setPage("About");
                break;
        }
    });
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: "navContainer" },
            react_1.default.createElement("ul", null,
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Illustrations", onClick: () => setPage("Illustrations") }, "Illustrations")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#PixelArt", onClick: () => setPage("Pixelart") }, "PixelArt")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Software", onClick: () => setPage("Software") }, "Software")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#About", onClick: () => setPage("About") }, "About")),
                react_1.default.createElement("li", null,
                    react_1.default.createElement("a", { href: "#Contact" }, "Contact")))),
        react_1.default.createElement(AppendPage, { pagType: page })));
}
function MyApp() {
    return (react_1.default.createElement("div", null,
        react_1.default.createElement(Navigation, null),
        react_1.default.createElement(PixiApp, null)));
}
exports.default = MyApp;
//# sourceMappingURL=App.js.map