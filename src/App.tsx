import React, {useState, createContext, useContext, useEffect} from 'react';
import { Stage, Text, Sprite, useTick } from '@pixi/react';
import { TextStyle } from 'pixi.js'

type galleryType = "Illustrations" | "Pixelart" | "OilPaintings"
const reducer = (_,{ data }) => data

interface GalleryProps {
	galType?: galleryType
}

const defaultGalleryProps: GalleryProps = {
	galType: 'Illustrations'
}


function Title ({title}: {title: string}) {

var posY: number = 80
const [motion,update] = useReducer(reducer)



const textStyle: TextStyle = new TextStyle(
{
	fontFamily: 'Roboto',
	fontSize: 90
})

const titleArr: string[] = title.split('')

//Calculate first letter position
const titleLength: number = title.length 
const titleLengthPixels: number = titleLength/2 
const titleSpacing: number = 40

const letters = [
	<Text text={"S"} anchor={0.5} x={window.innerWidth/2 - titleLengthPixels * titleSpacing} y={posY} style={textStyle} />
	<Text text={"n"} anchor={0.5} x={window.innerWidth/2 + titleLengthPixels * titleSpacing} y={posY} style={textStyle} />
]

useTick((delta) => {

update({

type: 'update',
data: {
	y: //Update y pos when mouseX is under the letter	
},

})

})



return (
	<>
	{letters.map((letter, index) => (
		<div key={index}>{letter}</div>	
	))
	</>
)

}

function PixiApp() {

	return (
	<div id="pixiApp">
	<Stage width={window.innerWidth} height={window.innerHeight} options={{backgroundColor: 0xffffff}} >
	<Title title="Shahroz Khan"/>
	</Stage>
	</div>
	)

}

function AppendGallery (props: GalleryProps) {
	
	if(props.galType==="Illustrations") {
	return (
		<div id="gallery">
		<img src="img/illustrations/ff.png"/>
		</div>
	       )	
	} else if (props.galType==="Pixelart"){
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
	}	

}

function Navigation() {

const [gallery,setGallery] = useState<galleryType>("Illustrations")

var hash: string = window.location.hash


useEffect(()=> {

		switch(hash) {
		
		case "#Illustrations":
		setGallery("Illustrations")
		break;

		case "#PixelArt":
		setGallery("Pixelart")
		break;

		}


})

	return (

	<div>	
	<div id="navContainer">

	<ul>
	<li><a href="#Illustrations" onClick={() => setGallery("Illustrations")}>Illustrations</a></li>
	<li><a href="#PixelArt" onClick={() => setGallery("Pixelart")}>PixelArt</a></li>
	<li><a href="#OilPaintings">OilPaintings</a></li>
	<li><a href="#Software">Software</a></li>
	<li><a href="#About">About</a></li>
	<li><a href="#Contact">Contact</a></li>
	</ul>
	
	<AppendGallery galType={gallery}/>	

	</div>
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
