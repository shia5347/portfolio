import React, {useEffect} from 'react'
import * as THREE from 'three'
import '../homepageStyles.css'
import {FBXLoader} from 'three/examples/jsm/loaders/FBXLoader'


export default function RotatingBirdScene() {
	useEffect(() => {

	var doc = document.getElementById("rotatingBirdCanvas")
	if(doc == null) {
		console.error('Container of "rotatingBirdCanvas" not found!')
		return;
	}

	const scene = new THREE.Scene()
	const camera:THREE.Camera = new THREE.PerspectiveCamera(75,doc.clientWidth/doc.clientHeight,0.1,1000)

	const renderer:THREE.WebGLRenderer = new THREE.WebGLRenderer()
	renderer.setSize(doc.clientWidth,doc.clientHeight)
	renderer.setClearColor(0x131313,0.0)


	const light:THREE.AmbientLight = new THREE.AmbientLight(0xffffff)
	const pLight:THREE.PointLight = new THREE.PointLight(0xffffff)

	pLight.position.y = 4
	pLight.intensity = 30;
	
	scene.add(light)
	scene.add(pLight)

	doc.appendChild(renderer.domElement)

	const loader:THREE.Loader = new FBXLoader()

	camera.position.z = 8
	camera.position.y = 3.0
	camera.rotation.x = 0.0
	
	var obj:THREE.Object3D 

	loader.load('/models/gary.fbx', function (objLoader: any) {
		obj = objLoader
		obj.scale.set(0.03,0.03,0.03)
		scene.add(obj)
		console.log("MODEL loaded successfuly")
	}, undefined, function (error: any) {
		console.log(error)
	})

	const clock = new THREE.Clock()

	const animate = () => {

		requestAnimationFrame(animate)
		renderer.render(scene,camera)
		if(obj) {
		obj.rotation.y += 0.5 * clock.getDelta();
		}


	}


	animate()

	},[])	

	return null
}
