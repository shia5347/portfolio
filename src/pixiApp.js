"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PIXI = require("pixi.js");
var app = new PIXI.Application({ resizeTo: window });
var pixiCanvas = document.getElementById("pixiApp");
if (pixiCanvas === null) {
    console.log("Pixi dom div not found");
}
else {
    pixiCanvas.appendChild(app.view);
}
//app.renderer.background.color='#ffff0f'
