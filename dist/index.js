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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const client_1 = require("react-dom/client");
const App_1 = __importDefault(require("./App"));
const HomepageApp_1 = __importDefault(require("./HomepageApp"));
const MyGames_1 = __importDefault(require("./MyGames"));
const react_router_dom_1 = require("react-router-dom");
const rootElement = document.getElementById("root");
const router = (0, react_router_dom_1.createBrowserRouter)([
    { path: '/', element: react_1.default.createElement(App_1.default, null) },
    {
        path: '/home',
        element: react_1.default.createElement(HomepageApp_1.default, null),
        children: [
            { index: true, path: 'games', element: react_1.default.createElement(MyGames_1.default, null) },
            { path: 'software', element: react_1.default.createElement("h1", null, "SOFTWARE") }
        ],
    }
]);
if (rootElement) {
    const root = (0, client_1.createRoot)(rootElement);
    root.render(react_1.default.createElement(react_1.StrictMode, null,
        react_1.default.createElement(react_router_dom_1.RouterProvider, { router: router })));
}
else {
    console.log("Element with id 'root' not found.");
}
//# sourceMappingURL=index.js.map