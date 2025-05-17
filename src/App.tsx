import React, {useState,  useEffect, useReducer, useCallback } from 'react';
import { Stage, Text, Sprite, useTick, Graphics } from '@pixi/react';
import { Viewport  } from 'pixi-viewport'
import { TextStyle, Application, Container } from 'pixi.js'
import * as SOUND from "@pixi/sound"

import {BrowserRouter, Link} from 'react-router-dom'

const ratio:number = window.innerWidth/window.innerHeight

const reducerPlain = (_: any,{ data }: any) => data

const app = new Application<HTMLCanvasElement>({
	width: window.innerWidth,
	height: window.innerHeight,
	backgroundColor: 0x1099bb,
})


var mouseX: number
var mouseY: number
document.addEventListener("mousemove",(event) => {
	mouseX = event.clientX
	mouseY = event.clientY
})


function Title () {

var posY: number = 75
var windowWidth: number = window.innerWidth
var windowHeight: number = window.innerHeight


var title: string = "Shahroz Khan"

const [motion,update] = useReducer(reducerPlain, null)

const textStyle: TextStyle = new TextStyle(
{
	fontFamily: 'Roboto-Regular',
	fontSize: 180,
	fill: 'white'
})

const activeTextStyle: TextStyle = new TextStyle( {
	fontFamily: 'Roboto-Regular',
	fontSize: 160,
	stroke: 'red',
	strokeThickness: 2,
	fill: 'white'
	}
)

var hyperlinkFontSize: number = 50

var hyperlinkStyle: TextStyle = new TextStyle({
	fontFamily: 'Jersey 10',
	fontSize: hyperlinkFontSize,
	fill: 'orange'
})

var hyperlinkText: string = "Go to the lounge"
var hyperlinkLength: number = hyperlinkText.length 


const titleArr: string[] = title.split('')

//Calculate first letter position
const titleLength: number = title.length 
const titleLengthPixels: number = titleLength/2 
const titleSpacing: number = 100

var titleY: number = windowHeight/2 

const letterPositionsArr = [
	{x: windowWidth/2 - titleLengthPixels * titleSpacing, y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: titleY, char: textStyle},		

	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing)), y: titleY, char: textStyle}		
]


var hMax:number = windowHeight/2-20
var g:number = 9.8
//Physics properties for each letter
const letterPhysicsArr = [
	{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

	{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: hMax, tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: titleY, vMax: Math.sqrt(2*hMax*g), hoverable: true}
]


const [letterPositions, setLetterPositions] = useState(letterPositionsArr)
const [letterPhysics, setLetterPhysics] = useState(letterPhysicsArr)
const [stopPlaying, setStopPlaying] = useState(false)
//const titleMask = new Graphics()
//titleMask.beginFill(0x000000)
//titleMask.drawRect(0,0,windowWidth,150)
var bubbleSound: SOUND.Sound = SOUND.Sound.from('../src/audio/bubble.wav')

var charDistance:number = letterPositions[1].x - letterPositions[0].x

const updateOnResize = useCallback((g: any) => {


	g.clear()
	g.beginFill(0x000000)
	g.drawRect(

		0,
		0,
		windowWidth,
		windowHeight-20
		  )

hyperlinkStyle.fontSize = hyperlinkFontSize
setLetterPositions([
	{x: windowWidth/2 - titleLengthPixels * titleSpacing, y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: titleY, char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: titleY, char: textStyle},		

	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: titleY, char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing)), y: titleY, char: textStyle}		
])



//Remove event listener for mouseMove and add it again
for(var i = 0; i < letterPhysics.length; i++) {
		letterPhysics[i].floor = windowHeight/2 
		letterPositions[i].x = windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing*i))
}

	charDistance = letterPositions[1].x - letterPositions[0].x


}, [windowWidth,windowHeight]) 



var letterIndex: number = 0

useTick((delta) => {

//If mouseX is greater than x at i and < x at i+1; Raise element at i 

const targetFrameRate: number = 60
var normalizedDelta:number = delta/(1000/targetFrameRate)

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








function bounce(i: number): void {

			//While max height is above 0	
			if(letterPhysics[i].hMax > 0.01) {
			
			if(letterPhysics[i].freeFall) {
			
			letterPhysics[i].hNew = letterPhysics[i].h - letterPhysics[i].v*normalizedDelta - 0.5*letterPhysics[i].g*(normalizedDelta*normalizedDelta)
			letterPositions[i].y = letterPhysics[i].hNew
			
			setLetterPositions(letterPositions)
			
			if(letterPositions[i].y > letterPhysics[i].floor) {

			letterPhysics[i].t = letterPhysics[i].tLast + 2*Math.sqrt(2*letterPhysics[i].hMax/letterPhysics[i].g)		
			letterPhysics[i].tLast = letterPhysics[i].t + letterPhysics[i].cTime
			letterPhysics[i].freeFall = false

			letterPhysics[i].h=letterPhysics[i].floor
			} 

			else {
			letterPhysics[i].t+=normalizedDelta
			letterPhysics[i].v-=letterPhysics[i].g*normalizedDelta
			letterPhysics[i].h=letterPhysics[i].hNew

			}
			
			} else {

			letterPhysics[i].t = letterPhysics[i].t+letterPhysics[i].cTime	
			letterPhysics[i].vMax = letterPhysics[i].vMax*letterPhysics[i].cr
			letterPhysics[i].v = letterPhysics[i].vMax
			letterPhysics[i].freeFall = true
			letterPhysics[i].h=letterPhysics[i].floor

			}
		


		letterPhysics[i].floor = windowHeight/2
		letterPhysics[i].hMax = 0.5*letterPhysics[i].vMax*letterPhysics[i].vMax/letterPhysics[i].g
		setLetterPhysics(letterPhysics)
		}
}


//Click handler



document.addEventListener('click', (e) => {
		for(let i = 0; i < letterPositions.length; i++) {
		if(mouseX > letterPositions[i].x && mouseX < letterPositions[i].x+70) {
			letterPhysics[i].hoverable = false
			letterPhysics[i].freeFall = true
		}
}})



		for(let i = 0; i < letterPositions.length; i++) {
		
		//If jumping of the letter is finished, then reset it's values
		if(letterPhysics[i].hMax <= 0.01) {
			letterPhysics[i] = letterPhysicsArr[i]
			setLetterPhysics(letterPhysics)
		}

		if(letterPhysics[i].hoverable === false) {
			bounce(i)
		}
		
		if(mouseX > letterPositions[i].x && mouseX < letterPositions[i].x+charDistance) {

			letterPositions[i].char = activeTextStyle
			
			if(letterPositions[i].y > hMax && letterPhysics[i].hoverable) {
				letterPositions[i].y -= normalizedDelta * 80 
				setLetterPositions(letterPositions)
			} 

		} else {
			
			letterPositions[i].char = textStyle

			if(letterPositions[i].y < letterPhysics[i].floor && letterPhysics[i].hoverable) {
				letterPositions[i].y += normalizedDelta * 80 
				setLetterPositions(letterPositions)
			} 

		}


		}



update({




type: 'update',
data: {

},

})


})


var handleClick = () => {
		for(let i = 0; i < letterPositions.length; i++) {
		if(mouseX > letterPositions[i].x && mouseX < letterPositions[i].x+charDistance) {
			letterPhysics[i].hoverable = false
			letterPhysics[i].freeFall = true
		}
	}
}


var handleHyperLink = () => {
	console.log("WORKS")
}


return (
	<>
<Graphics draw={updateOnResize}/>

	<Text text={"S"} anchor={0.5} x={letterPositions[0].x} y={letterPositions[0].y} style={letterPositions[0].char} />

	<Text text={"h"} anchor={0.5} x={letterPositions[1].x} y={letterPositions[1].y} style={letterPositions[1].char} />

	<Text text={"a"} anchor={0.5} x={letterPositions[2].x} y={letterPositions[2].y} style={letterPositions[2].char} />

	<Text text={"h"} anchor={0.5} x={letterPositions[3].x} y={letterPositions[3].y} style={letterPositions[3].char} />

	<Text text={"r"} anchor={0.5} x={letterPositions[4].x} y={letterPositions[4].y} style={letterPositions[4].char} />

	<Text text={"o"} anchor={0.5} x={letterPositions[5].x} y={letterPositions[5].y} style={letterPositions[5].char} />

	<Text text={"z"} anchor={0.5} x={letterPositions[6].x} y={letterPositions[6].y} style={letterPositions[6].char} />

	<Text text={"K"} anchor={0.5} x={letterPositions[7].x} y={letterPositions[7].y} style={letterPositions[7].char} />

	<Text text={"h"} anchor={0.5} x={letterPositions[8].x} y={letterPositions[8].y} style={letterPositions[8].char} />

	<Text text={"a"} anchor={0.5} x={letterPositions[9].x} y={letterPositions[9].y} style={letterPositions[9].char} />

	<Text text={"n"} anchor={0.5} x={letterPositions[10].x} y={letterPositions[10].y} style={letterPositions[10].char} />

	</>
)

}




function PixiApp() {

const [width,setWidth] = useState(window.innerWidth)
const [height,setHeight] = useState(window.innerHeight)

window.addEventListener('resize', () => {


	if(window.innerWidth > width && window.innerHeight > height) {
		console.log('ZOOMED OUT')
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	} else {
		
		if(window.innerWidth < width && window.innerHeight < height) {
			console.log('ZOOMED IN')
			setWidth(window.innerWidth)
			setHeight(window.innerHeight)
		}
		
	}	

	})
	
	return (
	<div id="pixiApp">
	<Stage width={width} height={height} options={{backgroundAlpha: 0}}>
	<Title/>
	</Stage>
	</div>
	)
       
}



export default function MyApp() {
	
	var page = 'myGames'
	return (
		
		<div id="homepageLinkDiv">
			<PixiApp/>
			<BrowserRouter>
			<Link to={`/home/${page}`}>Enter the lounge</Link>
			</BrowserRouter>
		</div>

	);
}
