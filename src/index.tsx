import React, { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Title from "./App";
import Homepage from './HomepageApp'
import MyGames from './MyGames'

import {createBrowserRouter, RouterProvider, createHashRouter} from 'react-router-dom'


const rootElement = document.getElementById("root");

const router = createBrowserRouter([
	
{path: '/', element: <Title/>},
{
	path: '/home', 
	element: <Homepage/>,
	children: [
		{index: true, path: 'games', element: <MyGames/>},
		{path: 'software', element: <h1>SOFTWARE</h1>}
	],
}
])


if(rootElement) {
const root = createRoot(rootElement);
root.render(
	<StrictMode>
	<RouterProvider router={router}/>
	</StrictMode>
);
} else {
console.log("Element with id 'root' not found.")
}
