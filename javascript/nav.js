document.addEventListener('DOMContentLoaded', main);

function main(){
const orb1 = document.querySelector('#orb1');
const orb2 = document.querySelector('#orb2');
const orb3 = document.querySelector('#orb3');
var video = document.querySelector('video');
var options = document.querySelectorAll('.option');
var container = document.getElementById("container");
orb1.addEventListener('mouseover', function(evt){


video.src = 'videos/london.mp4';
options[1].classList.toggle('hide');
options[2].classList.toggle('hide');
});

orb1.addEventListener('mouseout', function(evt){


video.src = 'videos/rocks2.mp4';
options[1].classList.toggle('hide');
options[2].classList.toggle('hide');

});

orb3.addEventListener('mouseover', function(evt){


video.src = 'videos/flames.mp4';
options[0].classList.toggle('hide');
options[2].classList.toggle('hide');
});

orb3.addEventListener('mouseout', function(evt){


video.src = 'videos/rocks2.mp4';
options[0].classList.toggle('hide');
options[2].classList.toggle('hide');

});

orb2.addEventListener('mouseover', function(evt){


video.src = 'videos/beach.mp4';
options[0].classList.toggle('hide');
options[1].classList.toggle('hide');
});

orb2.addEventListener('mouseout', function(evt){


video.src = 'videos/rocks2.mp4';
options[0].classList.toggle('hide');
options[1].classList.toggle('hide');

});


};