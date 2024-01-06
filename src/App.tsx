import React, {useState, createContext, useContext, useEffect, useReducer, useCallback } from 'react';
import { Stage, Text, Sprite, useTick, Graphics } from '@pixi/react';
import { Viewport  } from 'pixi-viewport'
import { TextStyle, Application } from 'pixi.js'
import * as SOUND from "@pixi/sound"

const ratio:number = window.innerWidth/window.innerHeight

type pageType = "Illustrations" | "Pixelart" | "OilPaintings" | "About" | "Software"
const reducerPlain = (_: any,{ data }: any) => data

const app = new Application<HTMLCanvasElement>({
	width: window.innerWidth,
	height: window.innerHeight,
	backgroundColor: 0x1099bb,
	
})

interface PageProps {
	pagType?: pageType
}

const defaultPageProps: PageProps = {
	pagType: 'Illustrations'
}

var mouseX: number
var mouseY: number
document.addEventListener("mousemove",(event) => {
	mouseX = event.screenX
	mouseY = event.screenY
})


function Title ({title}: {title: string}) {

var posY: number = 75

var windowWidth: number = window.innerWidth
var windowHeight: number = window.innerHeight

const [motion,update] = useReducer(reducerPlain, null)

const textStyle: TextStyle = new TextStyle(
{
	fontFamily: 'Roboto-Regular',
	fontSize: 90,
	fill: 'white'
})

const activeTextStyle: TextStyle = new TextStyle( {
	fontFamily: 'Roboto-Regular',
	fontSize: 90,
	stroke: 'red',
	strokeThickness: 2,
	fill: 'white'
	}
)

const titleArr: string[] = title.split('')

//Calculate first letter position
const titleLength: number = title.length 
const titleLengthPixels: number = titleLength/2 
const titleSpacing: number = 55

const letterPositionsArr = [
	{x: windowWidth/2 - titleLengthPixels * titleSpacing, y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: windowHeight-(windowHeight-posY), char: textStyle},		

	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing)), y: windowHeight-(windowHeight-posY), char: textStyle}		
]

var hMax:number = windowHeight-(windowHeight-posY+20)
var g:number = 9.8
//Physics properties for each letter
const letterPhysicsArr = [
	{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: windowHeight-(windowHeight-posY+20), floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

	{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: windowHeight-(windowHeight-posY+20), floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: windowHeight-(windowHeight-posY+20), tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true},

{hNew: 0, cr: 0.75, v: 0, g: 29.8, t: 0, cTime: 0.10, freeFall: false, hMax: hMax, tLast: -Math.sqrt(2*hMax/g), h: hMax, floor: windowHeight-(windowHeight-posY), vMax: Math.sqrt(2*hMax*g), hoverable: true}
]


const [letterPositions, setLetterPositions] = useState(letterPositionsArr)
const [letterPhysics, setLetterPhysics] = useState(letterPhysicsArr)
const [stopPlaying, setStopPlaying] = useState(false)
//const titleMask = new Graphics()
//titleMask.beginFill(0x000000)
//titleMask.drawRect(0,0,windowWidth,150)
var bubbleSound: SOUND.Sound = SOUND.Sound.from('../src/audio/bubble.wav')

const drawBgRect = useCallback((g: any) => {
	g.clear()
	g.beginFill(0x000000)
	g.drawRect(

		0,
		0,
		windowWidth,
		150
		  )


setLetterPositions([
	{x: windowWidth/2 - titleLengthPixels * titleSpacing, y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing)), y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight-(windowHeight-posY), char: textStyle},
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 4)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 5)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 - ((titleLengthPixels * titleSpacing) - (titleSpacing * 6)), y: windowHeight-(windowHeight-posY), char: textStyle},		

	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 3)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 2)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing) - (titleSpacing * 1)), y: windowHeight-(windowHeight-posY), char: textStyle},		
	{x: windowWidth/2 + ((titleLengthPixels * titleSpacing)), y: windowHeight-(windowHeight-posY), char: textStyle}		
])


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
			
			if(letterPhysics[i].hNew > letterPhysics[i].floor) {


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

		if(mouseX > letterPositions[i].x && mouseX < letterPositions[i].x+70) {

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


return (
	<>
<Graphics draw={drawBgRect}/>

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
	<Title title="Shahroz Khan"/>
	</Stage>
	</div>
	)

}

function AppendPage (props: PageProps) {
	
	if(props.pagType==="Illustrations") {
	return (
		<div id="gallery">
		</div>
	       )	
	} else if (props.pagType==="Pixelart"){
		return ( 
		<div id="gallery">
		<img src="img/pixelart/Omeshicha.png"/>
		<img src="img/pixelart/AnimeMom.png"/>
		<img src="img/pixelart/Mario32x32.png"/>
		<img src="img/pixelart/MarioMockup.png"/>
		<img src="img/pixelart/NiceLogo.png"/>
		<img src="img/pixelart/HorseAsbaran.png"/>
		<img src="img/pixelart/Mockup2.png"/>
		</div> 

		)
	} else if(props.pagType==="About") {

		return (
		<>
		<h1 id="subTitle">About Me</h1>
		<img src="img/myFace.jpg" id="myFace"/> 
		<p id="aboutMeText">
	Hi! I am a hobbyist game developer with knowledge both in web development and software development. 
	I have a strong passion for art beyond just my games and enjoy experimenting with math equations to get cool effects in my software.
		</p>

		<p id="aboutMeText">
		I have participated in many game jams (which are hackathons but for video game projects) and created many other projects beyond just that. My favorite programming languages are c++ and typescript. 
		</p>

		<p id="aboutMeText">
		I am looking forward to designing new innovative games in the future and commercializing my creative works.
		</p>

		</>
		)

	}	

}

function Navigation() {

const [page,setPage] = useState<pageType>("Illustrations")

var hash: string = window.location.hash


useEffect(()=> {

		switch(hash) {
		
		case "#Illustrations":
		setPage("Illustrations")
		break;

		case "#PixelArt":
		setPage("Pixelart")
		break;


		case "#About":
		setPage("About")
		break;

		}

})

	return (

	<div>	
	<div id="navContainer">

	<ul>
	<li><a href="#Illustrations" onClick={() => setPage("Illustrations")}>Illustrations</a></li>
	<li><a href="#PixelArt" onClick={() => setPage("Pixelart")}>PixelArt</a></li>
	<li><a href="#Software" onClick={() => setPage("Software")}>Software</a></li>
	<li><a href="#About" onClick={() => setPage("About")}>About</a></li>
	<li><a href="#Contact">Contact</a></li>
	</ul>
	


	</div>

	<AppendPage pagType={page}/>	
	</div>

);

}



export default function MyApp() {
	

	return (
		
		<div>
			<Navigation />
			<PixiApp/>

		</div>

	);
}
