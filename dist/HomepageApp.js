"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const RotatingBirdCanvas_1 = __importDefault(require("./RotatingBirdCanvas"));
const react_router_dom_1 = require("react-router-dom");
require("../homepageStyles.css");
function Homepage() {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("h1", { id: "title" }, "Shahroz Khan"),
        react_1.default.createElement("div", { id: "homepageHeader" },
            react_1.default.createElement("hr", null),
            react_1.default.createElement("a", { className: "active", href: "/mygames" }, "MyGames"),
            react_1.default.createElement("a", { href: "/Software" }, "Software"),
            react_1.default.createElement("a", { href: "/Blog" }, "Blog"),
            react_1.default.createElement("a", { href: "/AboutMe" }, "About Me"),
            react_1.default.createElement(RotatingBirdCanvas_1.default, null),
            react_1.default.createElement("div", { id: "rotatingBirdCanvas" }),
            react_1.default.createElement("br", null)),
        react_1.default.createElement(react_router_dom_1.Outlet, null)));
}
exports.default = Homepage;
//# sourceMappingURL=HomepageApp.js.map