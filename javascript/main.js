      const canvas = document.getElementById('c1');
      const context = canvas.getContext('2d');


      const canvas3 = document.getElementById('c1');
      const context3 = canvas3.getContext('2d');

      var referenceWidth = window.innerWidth;
      var referenceHeight = window.innerHeight;
      var image = new Image();
      image.src = "images/d2prog.png";


      var video2 = document.querySelectorAll('video')[0];

      video2.addEventListener('loadeddata',setup);

      function setup() {
        // set the display size

        canvas.style.width = referenceWidth + 'px';
        canvas.style.height = referenceHeight + 'px';
        canvas3.style.width = referenceWidth + 'px';
        canvas3.style.height = referenceHeight + 'px';

        // Set actual device pixels
        var scale = window.devicePixelRatio;
        canvas.width = referenceWidth * scale;
        canvas.height = referenceHeight * scale;
        canvas3.width = referenceWidth * scale;
        canvas3.height = referenceHeight * scale;
        // normalize the coordinate system
        context.scale(scale, scale);
        // context3.scale(scale,scale);

        draw();
      }
      var frames = 0;
      function draw() {
        context3.drawImage(video2,0,0,referenceWidth,referenceHeight);

        context.drawImage(image,0,0,referenceWidth,referenceHeight);

        requestAnimationFrame(draw);
      }

