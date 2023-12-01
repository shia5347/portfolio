import * as PIXI from 'pixi.js'

let app = new PIXI.Application<HTMLCanvasElement>({resizeTo: window})
var pixiCanvas = document.getElementById("pixiApp")

	if(pixiCanvas === null) {
		console.log("Pixi dom div not found")

	} else {

		pixiCanvas.appendChild(app.view)

}
