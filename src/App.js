"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_2 = require("@pixi/react");
var pixi_js_1 = require("pixi.js");
var SOUND = require("@pixi/sound");
var ratio = window.innerWidth / window.innerHeight;
var reducerPlain = function (_, _a) {
    var data = _a.data;
    return data;
};
var app = new pixi_js_1.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x1099bb,
});
var defaultPageProps = {
    pagType: 'Illustrations'
};
var mouseX;
var mouseY;
document.addEventListener("mousemove", function (event) {
    mouseX = event.clientX;
    mouseY = event.clientY;
});
function Title(_a) {
    var title = _a.title;
    var posY = 75;
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var _b = (0, react_1.useReducer)(reducerPlain, null), motion = _b[0], update = _b[1];
    var textStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Roboto-Regular',
        fontSize: 180,
        fill: 'white'
    });
    var activeTextStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Roboto-Regular',
        fontSize: 160,
        stroke: 'red',
        strokeThickness: 2,
        fill: 'white'
    });
    var hyperlinkFontSize = 50;
    var hyperlinkStyle = new pixi_js_1.TextStyle({
        fontFamily: 'Jersey 10',
        fontSize: hyperlinkFontSize,
        fill: 'orange'
    });
    var hyperlinkText = "Go to the lounge";
    var hyperlinkLength = hyperlinkText.length;
    var titleArr = title.split('');
    //Calculate first letter position
    var titleLength = title.length;
    var titleLengthPixels = titleLength / 2;
    var titleSpacing = 100;
    var titleY = windowHeight / 2;
    var letterPositionsArr = [
        { x: windowWidth / 2 - titleLengthPixels * titleSpacing, y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: titleY, char: textStyle },
        { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: titleY, char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: titleY, char: textStyle },
        { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing)), y: titleY, char: textStyle }
    ];
    var hMax = windowHeight / 2 - 20;
    var g = 9.8;
    //Physics properties for each letter
    var letterPhysicsArr = [
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight - (windowHeight - posY + 20), tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true },
        { hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: hMax, tLast: -Math.sqrt(2 * hMax / g), h: hMax, floor: titleY, vMax: Math.sqrt(2 * hMax * g), hoverable: true }
    ];
    var _c = (0, react_1.useState)(letterPositionsArr), letterPositions = _c[0], setLetterPositions = _c[1];
    var _d = (0, react_1.useState)(letterPhysicsArr), letterPhysics = _d[0], setLetterPhysics = _d[1];
    var _e = (0, react_1.useState)(false), stopPlaying = _e[0], setStopPlaying = _e[1];
    //const titleMask = new Graphics()
    //titleMask.beginFill(0x000000)
    //titleMask.drawRect(0,0,windowWidth,150)
    var bubbleSound = SOUND.Sound.from('../src/audio/bubble.wav');
    var charDistance = letterPositions[1].x - letterPositions[0].x;
    var updateOnResize = (0, react_1.useCallback)(function (g) {
        g.clear();
        g.beginFill(0x000000);
        g.drawRect(0, 0, windowWidth, windowHeight);
        hyperlinkStyle.fontSize = hyperlinkFontSize;
        setLetterPositions([
            { x: windowWidth / 2 - titleLengthPixels * titleSpacing, y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: titleY, char: textStyle },
            { x: windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: titleY, char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: titleY, char: textStyle },
            { x: windowWidth / 2 + ((titleLengthPixels * titleSpacing)), y: titleY, char: textStyle }
        ]);
        //Remove event listener for mouseMove and add it again
        for (var i = 0; i < letterPhysics.length; i++) {
            letterPhysics[i].floor = windowHeight / 2;
            letterPositions[i].x = windowWidth / 2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * i));
        }
        charDistance = letterPositions[1].x - letterPositions[0].x;
    }, [windowWidth, windowHeight]);
    var letterIndex = 0;
    (0, react_2.useTick)(function (delta) {
        //If mouseX is greater than x at i and < x at i+1; Raise element at i 
        var targetFrameRate = 60;
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
                    if (letterPositions[i].y > letterPhysics[i].floor) {
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
                letterPhysics[i].floor = windowHeight / 2;
                letterPhysics[i].hMax = 0.5 * letterPhysics[i].vMax * letterPhysics[i].vMax / letterPhysics[i].g;
                setLetterPhysics(letterPhysics);
            }
        }
        //Click handler
        for (var i = 0; i < letterPositions.length; i++) {
            //If jumping of the letter is finished, then reset it's values
            if (letterPhysics[i].hMax <= 0.01) {
                letterPhysics[i] = letterPhysicsArr[i];
                setLetterPhysics(letterPhysics);
            }
            if (letterPhysics[i].hoverable === false) {
                bounce(i);
            }
            if (mouseX > letterPositions[i].x && mouseX < letterPositions[i].x + charDistance) {
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
    var handleClick = function () {
        for (var i = 0; i < letterPositions.length; i++) {
            if (mouseX > letterPositions[i].x && mouseX < letterPositions[i].x + charDistance) {
                letterPhysics[i].hoverable = false;
                letterPhysics[i].freeFall = true;
            }
        }
    };
    return ((0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)(react_2.Graphics, { draw: updateOnResize }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "S", anchor: 0.5, x: letterPositions[0].x, y: letterPositions[0].y, style: letterPositions[0].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[1].x, y: letterPositions[1].y, style: letterPositions[1].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "a", anchor: 0.5, x: letterPositions[2].x, y: letterPositions[2].y, style: letterPositions[2].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[3].x, y: letterPositions[3].y, style: letterPositions[3].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "r", anchor: 0.5, x: letterPositions[4].x, y: letterPositions[4].y, style: letterPositions[4].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "o", anchor: 0.5, x: letterPositions[5].x, y: letterPositions[5].y, style: letterPositions[5].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "z", anchor: 0.5, x: letterPositions[6].x, y: letterPositions[6].y, style: letterPositions[6].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "K", anchor: 0.5, x: letterPositions[7].x, y: letterPositions[7].y, style: letterPositions[7].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "h", anchor: 0.5, x: letterPositions[8].x, y: letterPositions[8].y, style: letterPositions[8].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "a", anchor: 0.5, x: letterPositions[9].x, y: letterPositions[9].y, style: letterPositions[9].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: "n", anchor: 0.5, x: letterPositions[10].x, y: letterPositions[10].y, style: letterPositions[10].char }), (0, jsx_runtime_1.jsx)(react_2.Text, { text: hyperlinkText, x: windowWidth / 2 - 120, y: windowHeight - 80, style: hyperlinkStyle })] }));
}
function PixiApp() {
    var _a = (0, react_1.useState)(window.innerWidth), width = _a[0], setWidth = _a[1];
    var _b = (0, react_1.useState)(window.innerHeight), height = _b[0], setHeight = _b[1];
    window.addEventListener('resize', function () {
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
    return ((0, jsx_runtime_1.jsx)("div", __assign({ id: "pixiApp" }, { children: (0, jsx_runtime_1.jsx)(react_2.Stage, __assign({ width: width, height: height, options: { backgroundAlpha: 0 } }, { children: (0, jsx_runtime_1.jsx)(Title, { title: "Shahroz Khan" }) })) })));
}
function AppendPage(props) {
    var _a = (0, react_1.useState)("SoftwareGAMES"), softwarePage = _a[0], setPage = _a[1];
    if (props.pagType === "Illustrations") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ id: "gallery" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "imgContainer" }, { children: (0, jsx_runtime_1.jsx)("img", { src: "img/illustrations/BinocularGirl.png" }) })) })));
    }
    else if (props.pagType === "Pixelart") {
        return ((0, jsx_runtime_1.jsx)("div", __assign({ id: "gallery" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/Omeshicha.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/AnimeMom.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/Mario32x32.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/MarioMockup.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/NiceLogo.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/HorseAsbaran.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/Mockup2.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/PlayerWalkingUp.png" }), (0, jsx_runtime_1.jsx)("img", { src: "img/pixelart/PlayerWalkingDown.png" })] })) })));
    }
    else if (props.pagType === "About") {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("h1", __assign({ id: "subTitle" }, { children: "About Me" })), (0, jsx_runtime_1.jsx)("img", { src: "img/myFace.jpg", id: "myFace" }), (0, jsx_runtime_1.jsx)("p", __assign({ id: "aboutMeText" }, { children: "Hi! I am a hobbyist game developer with knowledge both in web development and software development. I have a strong passion for art beyond just my games and enjoy experimenting with math equations to get cool effects in my software." })), (0, jsx_runtime_1.jsx)("p", __assign({ id: "aboutMeText" }, { children: "I have participated in many game jams (which are hackathons but for video game projects) and created many other projects beyond just that. My favorite programming languages are c++ and typescript." })), (0, jsx_runtime_1.jsx)("p", __assign({ id: "aboutMeText" }, { children: "I am looking forward to designing new innovative games in the future and commercializing my creative works." }))] }));
    }
    else if (props.pagType === "Software") {
        if (softwarePage === "SoftwareGAMES") {
            return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareNav" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#CLITools", onClick: function () { return setPage("SoftwareCLI"); } }, { children: "CLI tools" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#Games", onClick: function () { return setPage("SoftwareGAMES"); } }, { children: "Games" })) })] }) })), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "gallery" }, { children: [(0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { id: "img1", src: "img/gameImages/birbyNight.gif" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://devoc.itch.io/birby" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareIMGOverlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "softwareIMGOverlayText" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Puzzle platformer with" }), (0, jsx_runtime_1.jsx)("p", { children: "platform splashing mechanics." }), (0, jsx_runtime_1.jsx)("p", { children: "Made in Godot." })] })) })) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { id: "img2", src: "img/gameImages/terminalShooter.png" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://devoc.itch.io/terminalShooter" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareIMGOverlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "softwareIMGOverlayText" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "Bullet hell java game with" }), (0, jsx_runtime_1.jsx)("p", { children: "player switching mechanics." }), (0, jsx_runtime_1.jsx)("p", { children: "Made for the brackeys game jam." })] })) })) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { id: "img3", src: "img/gameImages/lifelessBits.gif" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://devoc.itch.io/lifelessBits" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareIMGOverlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "softwareIMGOverlayText" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "FPS highscore game." }), (0, jsx_runtime_1.jsx)("p", { children: "Made for the LOWREZ jam." })] })) })) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { id: "img4", src: "img/gameImages/1984.png" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://devoc.itch.io/1984" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareIMGOverlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "softwareIMGOverlayText" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "First person story game" }), (0, jsx_runtime_1.jsx)("p", { children: "based on the book 1984" }), (0, jsx_runtime_1.jsx)("p", { children: "by George Orwell." })] })) })) }))] })), (0, jsx_runtime_1.jsxs)("div", __assign({ id: "imgContainer" }, { children: [(0, jsx_runtime_1.jsx)("img", { id: "img5", src: "img/gameImages/DegBomb.png" }), (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://devoc.itch.io/degree-bomb" }, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareIMGOverlay" }, { children: (0, jsx_runtime_1.jsxs)("div", __assign({ id: "softwareIMGOverlayText" }, { children: [(0, jsx_runtime_1.jsx)("p", { children: "A unity3D game about" }), (0, jsx_runtime_1.jsx)("p", { children: "about destorying enemies" }), (0, jsx_runtime_1.jsx)("p", { children: "with a rotating sphere." }), (0, jsx_runtime_1.jsx)("p", { children: "Made for the brackeys game jam." })] })) })) }))] }))] }))] }));
        }
        else if (softwarePage === "SoftwareCLI") {
            return ((0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "softwareNav" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#CLITools", onClick: function () { return setPage("SoftwareCLI"); } }, { children: "CLI tools" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#Games", onClick: function () { return setPage("SoftwareGAMES"); } }, { children: "Games" })) })] }) })) }));
        }
    }
    else if (props.pagType === "Contact") {
        return ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)("img", { src: "img/awkwardSmile.jpg", id: "myFace" }), (0, jsx_runtime_1.jsx)("p", __assign({ id: "aboutMeText" }, { children: "Email: mugeneve@gmail.com" })), (0, jsx_runtime_1.jsxs)("p", __assign({ id: "aboutMeText" }, { children: ["Github: ", (0, jsx_runtime_1.jsx)("a", __assign({ href: "https://github.com/shia5347" }, { children: "shia5347" }))] }))] }));
    }
}
function Navigation() {
    var _a = (0, react_1.useState)("Illustrations"), page = _a[0], setPage = _a[1];
    var hash = window.location.hash;
    (0, react_1.useEffect)(function () {
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
            case "#Software":
                setPage("Software");
                break;
            case "#Contact":
                setPage("Contact");
                break;
        }
    });
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)("div", __assign({ id: "navContainer" }, { children: (0, jsx_runtime_1.jsxs)("ul", { children: [(0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#Illustrations", onClick: function () { return setPage("Illustrations"); } }, { children: "Illustrations" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#PixelArt", onClick: function () { return setPage("Pixelart"); } }, { children: "PixelArt" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#Software", onClick: function () { return setPage("Software"); } }, { children: "Software" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#Contact", onClick: function () { return setPage("Contact"); } }, { children: "Contact" })) }), (0, jsx_runtime_1.jsx)("li", { children: (0, jsx_runtime_1.jsx)("a", __assign({ href: "#About", onClick: function () { return setPage("About"); } }, { children: "About" })) })] }) })) }));
}
function MyApp() {
    return ((0, jsx_runtime_1.jsx)("div", { children: (0, jsx_runtime_1.jsx)(PixiApp, {}) }));
}
exports.default = MyApp;
