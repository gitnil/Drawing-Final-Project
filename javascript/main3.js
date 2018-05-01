document.addEventListener('DOMContentLoaded', main);

var positionX = 1500;
var positionX2 = 1500;
function main(){
var d = new Date();
console.log(d.getMilliseconds());
let images = ['images/symbols/om.png', 'images/symbols/lu.png','images/symbols/eye.png','images/symbols/heart.png','images/symbols/infinity.png','images/symbols/knot.png','images/symbols/peace.png','images/symbols/pentagram.png','images/symbols/tree.png','images/symbols/ying.png','images/symbols/balance.png','images/symbols/square.png'];
const Box12 = document.getElementById("box12");
const Box11 = document.getElementById("box11");
const Box10 = document.getElementById("box10");
const Box9 = document.getElementById("box9");
const Box8 = document.getElementById("box8");
const Box7 = document.getElementById("box7");
const Box6 = document.getElementById("box6");
const Box5 = document.getElementById("box5");
const Box4 = document.getElementById("box4");
const Box3 = document.getElementById("box3");
const Box2 = document.getElementById("box2");
const Box1 = document.getElementById("box1");

let order = [];
while (order.length < 12){
const number1 = Math.floor(Math.random() * (images.length)); 
order.push(images[number1]);
images.splice(number1,1);
}
console.log(order);
Box12.src = order[11];
Box11.src = order[10];
Box10.src = order[9];
Box9.src = order[8];
Box8.src = order[7];
Box7.src = order[6];
Box6.src = order[5];
Box5.src = order[4];
Box4.src = order[3];
Box3.src = order[2];
Box2.src = order[1];
Box1.src = order[0];

console.log(Box1.src);
animation = requestAnimationFrame(fly);
setInterval(newSet, 3000);

};

function fly(){
animation = requestAnimationFrame(fly);
const flock = document.getElementById("birds");
const flock2 = document.getElementById("birdstwo");
positionX -= 2;
positionX2 -= 3;
if (positionX < 0){
	positionX = 1800;
}
if (positionX2 < -300){
	positionX2 = 1800;
}
flock.style.left = positionX+"px";
flock2.style.left = positionX2+"px";
console.log(flock.style.left);

}
function newSet(){
let images = ['images/symbols/om.png', 'images/symbols/lu.png','images/symbols/eye.png','images/symbols/heart.png','images/symbols/infinity.png','images/symbols/knot.png','images/symbols/peace.png','images/symbols/pentagram.png','images/symbols/tree.png','images/symbols/ying.png','images/symbols/balance.png','images/symbols/square.png'];
const Box12 = document.getElementById("box12");
const Box11 = document.getElementById("box11");
const Box10 = document.getElementById("box10");
const Box9 = document.getElementById("box9");
const Box8 = document.getElementById("box8");
const Box7 = document.getElementById("box7");
const Box6 = document.getElementById("box6");
const Box5 = document.getElementById("box5");
const Box4 = document.getElementById("box4");
const Box3 = document.getElementById("box3");
const Box2 = document.getElementById("box2");
const Box1 = document.getElementById("box1");

let order = [];
while (order.length < 12){
const number1 = Math.floor(Math.random() * (images.length)); 
order.push(images[number1]);
images.splice(number1,1);
}
console.log(order);
Box12.src = order[11];
Box11.src = order[10];
Box10.src = order[9];
Box9.src = order[8];
Box8.src = order[7];
Box7.src = order[6];
Box6.src = order[5];
Box5.src = order[4];
Box4.src = order[3];
Box3.src = order[2];
Box2.src = order[1];
Box1.src = order[0];

}