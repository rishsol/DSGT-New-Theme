/*
Copyright (c) 2020 by Yugam (https://codepen.io/pizza3/pen/QWNzrJK)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
associated documentation files (the "Software"), to deal in the Software without restriction, 
including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT 
NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER 
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION 
WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var scene,
camera,
renderer,
width = window.innerWidth,
height = window.innerHeight,
material,
video;
var colormap = new THREE.TextureLoader().load("assets/images/shader/color.png");
var color = new THREE.TextureLoader().load("assets/images/shader/noise2.jpg");
var noi = new THREE.TextureLoader().load("assets/images/shader/fluid.jpg");
var uniforms = {
time: {
  type: "f",
  value: 10.0,
},
resolution: {
  value: new THREE.Vector2(width, height),
},
color: { type: "f", value: color },
colormap: { type: "f", value: colormap },
noiseTex: { type: "f", value: noi },
};
function init() {
createScene();
createLights();
plane();
animate();
}
function createScene() {
scene = new THREE.Scene();
scene.background = new THREE.Color( 0xECE9E1 );
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.y = 0.5
camera.position.z = 5;
renderer = new THREE.WebGLRenderer();
renderer.antialias = true;
renderer.setPixelRatio(window.devicePixelRatio);
const RENDERER_SCALER = 0.62
renderer.setSize(width * RENDERER_SCALER, height * RENDERER_SCALER);
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.interpolateneMapping = THREE.ACESFilmicToneMapping;
renderer.outputEncoding = THREE.sRGBEncoding;
document.getElementById("world").appendChild(renderer.domElement);
}
function createLights() {
const hemislight = new THREE.HemisphereLight();
hemislight.intensity = 0.2;
scene.add(hemislight);
const pointlight = new THREE.PointLight();
pointlight.distance = 1000;
pointlight.intensity = 0.7;
pointlight.position.set(30, 70, 20);
scene.add(pointlight);
}
function plane() {
var planegeometry = new THREE.PlaneGeometry(5, 5, 32);
var spheregeometry = new THREE.SphereGeometry(2, 32, 32);
material = new THREE.ShaderMaterial({
  uniforms: uniforms,
  transparent: true,
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
var plane = new THREE.Mesh(spheregeometry, material);
plane.rotation.z = Math.PI / 1.5;
scene.add(plane);
}
function handleResize() {
camera.aspect = window.innerWidth / window.innerHeight;
camera.updateProjectionMatrix();
renderer.setSize(window.innerWidth, window.innerHeight);
}
function animate(delta) {
requestAnimationFrame(animate);
material.uniforms.time.value = delta * 0.6;
renderer.render(scene, camera);
}
init();
window.addEventListener("resize", handleResize, false);
