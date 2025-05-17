"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("../homepageStyles.css");
function MyGames() {
    console.log("Loaded game gallery");
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", null, "asdasdasd"),
        react_1.default.createElement("div", { className: "gallery" },
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/1984.png" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/1984" }, "1984"),
                react_1.default.createElement("p", { id: "desc" }, "Made for a highschool english assignment"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows Linux")),
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/birbyNight.gif" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/Birby" }, "Birby"),
                react_1.default.createElement("p", { id: "desc" }, "A cute puzzle platformer"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows Linux")),
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/DegBomb.png" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/degBomb" }, "Degree Bomb"),
                react_1.default.createElement("p", { id: "desc" }, "Made for the Brackey's game jam when I was 15"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows")),
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/lifelessBits.gif" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/lifelessBits" }, "lifelessBits"),
                react_1.default.createElement("p", { id: "desc" }, "An arena shooter inspired by bauxite's meteorite LOWREZJAM entry"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows Linux")),
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/terminalShooter.png" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/terminalShooter" }, "terminalShooter"),
                react_1.default.createElement("p", { id: "desc" }, "A shootemup set in some computer"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows Linux")),
            react_1.default.createElement("div", { className: "selectable" },
                react_1.default.createElement("img", { src: "/img/gameImages/dreamGirl.png" }),
                react_1.default.createElement("br", null),
                react_1.default.createElement("a", { id: "selectionTitle", href: "/games/dreamGirl" }, "Undisclosed project"),
                react_1.default.createElement("p", { id: "desc" }, "A story game currently in development with a custom engine"),
                react_1.default.createElement("p", { id: "platformDesc" }, "Windows Linux")))));
}
exports.default = MyGames;
//# sourceMappingURL=MyGames.js.map