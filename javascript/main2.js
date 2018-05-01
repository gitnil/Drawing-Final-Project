document.addEventListener('DOMContentLoaded', main);

var positionX = 0;
var positionY = 560;
var opacity = 1;
var opacity2 = 1;
function main(){

const earth = document.getElementById("join");




animation = requestAnimationFrame(moveMap);

};

function moveMap(){
animation = requestAnimationFrame(moveMap);
const earth = document.getElementById("join");
const girl = document.getElementById("girl");
positionX += 1;
positionY -= 1;
opacity -= 0.02;
opacity2 -= 0.002;
if (positionY < -100){
	positionY = 560;
	opacity2 = 1;
}
if (opacity < 0){
	opacity = 1;
}

// earth.style.left = positionX+"px";
earth.style.top = positionY+"px";
earth.style.opacity = opacity2;
girl.style.opacity = opacity; 

}