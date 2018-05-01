      const canvas = document.getElementById('c1');
      const context = canvas.getContext('2d');


      const canvas3 = document.getElementById('c1');
      const context3 = canvas3.getContext('2d');

      const canvas4 = document.getElementById('c1');
      const context4 = canvas3.getContext('2d');

      const water = document.getElementById('fillup');

      var referenceWidth = 1400;
      var referenceHeight = 820;
      var image = new Image();
      image.src = "images/guyrendered.png";
      var image2 = new Image();
      image2.src = "images/water.png";
      var image3 = new Image();
      image3.src = "images/bg1.jpg";
      var video = document.querySelectorAll('video')[0];
      var video2 = document.querySelectorAll('video')[1];
      var video3 = document.querySelectorAll('video')[2];
      video2.playbackRate = 2.0;

      video2.addEventListener('loadeddata',setup);
var heightWater = 600;
      function setup() {
        // set the display size

        canvas.style.width = referenceWidth + 'px';
        canvas.style.height = referenceHeight + 'px';
        canvas3.style.width = referenceWidth + 'px';
        canvas3.style.height = referenceHeight + 'px';
        canvas4.style.width = referenceWidth + 'px';
        canvas4.style.height = referenceHeight + 'px';
        // Set actual device pixels
        var scale = window.devicePixelRatio;
        scale = 1;
        canvas.width = referenceWidth * scale;
        canvas.height = referenceHeight * scale;
        canvas3.width = referenceWidth * scale;
        canvas3.height = referenceHeight * scale;
        canvas4.width = referenceWidth * scale;
        canvas4.height = referenceHeight * scale;
        // normalize the coordinate system
        context.scale(scale, scale);
        context4.scale(scale,scale);
        // context3.scale(scale,scale);

        draw();
      }

      var frames = 0;
      function draw() {
        heightWater -= 0.7;
        context3.drawImage(video,0,0,referenceWidth,referenceHeight);

        context4.globalAlpha=0.4;
        context4.drawImage(video2,0,0,referenceWidth,referenceHeight+180);
        context4.globalAlpha=0.5;
        context4.drawImage(video3,0,-300,referenceWidth,referenceHeight+320);
        console.log(context4.globalAlpha);
        context4.globalAlpha = 0.2;
        context3.drawImage(video,0,0,referenceWidth,referenceHeight);
        context.drawImage(image3,0,0,referenceWidth,referenceHeight);
        context4.globalAlpha = 1.0;
        context.drawImage(image,0,0,referenceWidth,referenceHeight);
        context4.globalAlpha = 0.4;
        context.drawImage(image2,0,heightWater,referenceWidth,referenceHeight+200);
        context4.globalAlpha = 0.3;


        if (heightWater <= -200){
          heightWater+= 0.7;
        }
        context4.globalAlpha = 1.0;
        requestAnimationFrame(draw);

        

      }


function resizeScreen(){
      var referenceWidth = 1400;
      var referenceHeight = 800;
        canvas.style.width = referenceWidth + 'px';
        canvas.style.height = referenceHeight + 'px';
        canvas4.style.width = referenceWidth + 'px';
        canvas4.style.height = referenceHeight + 'px';
        // Set actual device pixels
        var scale = window.devicePixelRatio;
        scale = 1; 
        canvas.width = referenceWidth * scale;
        canvas.height = referenceHeight * scale;
        canvas4.width = referenceWidth * scale;
        canvas4.height = referenceHeight * scale;
        // normalize the coordinate system
        context.scale(scale, scale);
        context4.scale(scale,scale);

}


    window.addEventListener('resize', resizeScreen);

