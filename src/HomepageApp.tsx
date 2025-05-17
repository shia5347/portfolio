import React, { StrictMode, useEffect } from "react";
import RotatingBirdScene from './RotatingBirdCanvas'
import { Outlet, useParams } from 'react-router-dom'


import '../homepageStyles.css'
import MyGames from "./MyGames";



type HomepageProps = {
	page: string
}

export default function Homepage() {
	
		return (
		<>

		<h1 id="title">Shahroz Khan</h1>

		<div id="homepageHeader">

		<hr/>
		<a className="active" href="/mygames">MyGames</a>
		<a href="/Software">Software</a>
		<a href="/Blog">Blog</a>
		<a href="/AboutMe">About Me</a>
		<RotatingBirdScene/>
		<div id="rotatingBirdCanvas"/>
		<br/>

		</div>

		<Outlet/>

		</>
	)		
}


