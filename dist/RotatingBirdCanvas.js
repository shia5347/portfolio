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
const react_1 = require("react");
const THREE = __importStar(require("three"));
require("../homepageStyles.css");
const FBXLoader_1 = require("three/examples/jsm/loaders/FBXLoader");
function RotatingBirdScene() {
    (0, react_1.useEffect)(() => {
        var doc = document.getElementById("rotatingBirdCanvas");
        if (doc == null) {
            console.error('Container of "rotatingBirdCanvas" not found!');
            return;
        }
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, doc.clientWidth / doc.clientHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer();
        renderer.setSize(doc.clientWidth, doc.clientHeight);
        renderer.setClearColor(0x131313, 0.0);
        const light = new THREE.AmbientLight(0xffffff);
        const pLight = new THREE.PointLight(0xffffff);
        pLight.position.y = 4;
        pLight.intensity = 30;
        scene.add(light);
        scene.add(pLight);
        doc.appendChild(renderer.domElement);
        const loader = new FBXLoader_1.FBXLoader();
        camera.position.z = 8;
        camera.position.y = 3.0;
        camera.rotation.x = 0.0;
        var obj;
        loader.load('/models/gary.fbx', function (objLoader) {
            obj = objLoader;
            obj.scale.set(0.03, 0.03, 0.03);
            scene.add(obj);
            console.log("MODEL loaded successfuly");
        }, undefined, function (error) {
            console.log(error);
        });
        const clock = new THREE.Clock();
        const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            if (obj) {
                obj.rotation.y += 0.5 * clock.getDelta();
            }
        };
        animate();
    }, []);
    return null;
}
exports.default = RotatingBirdScene;
//# sourceMappingURL=RotatingBirdCanvas.js.map