module.exports =  function renderCanvas() {

    //requestAnimationFrame 兼容
    (function () {
      var lastTime = 0;
      var vendors = ['webkit', 'moz'];
      for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame'];
      }
  
      if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function (callback, element) {
          var currTime = new Date().getTime();
          var timeToCall = Math.max(0, 16 - (currTime - lastTime));
          var id = window.setTimeout(function () {
              callback(currTime + timeToCall);
            },
            timeToCall);
          lastTime = currTime + timeToCall;
          return id;
        };
  
      if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function (id) {
          clearTimeout(id);
        };
    }());
  
  
  
  
    var canvas = document.querySelector('#loginCanvas');
  
    canvas.width = document.querySelector('.cav').clientWidth;
    canvas.height = document.querySelector('.cav').clientHeight;
  
    var ctx = canvas.getContext("2d");
  
    window.onresize = function () {
      canvas.width = document.querySelector('.cav').clientWidth;
    }
  
    function Ball() {
      this.x = randomNum(3, canvas.width - 3);
      this.y = randomNum(3, canvas.height - 3);
      this.r = randomNum(0, 2);
      this.color = "#b6fbff";
      this.speedX = randomNum(-3, 3) * 0.3;
      this.speedY = randomNum(-3, 3) * 0.3;
    }
    Ball.prototype = {
      //绘制小球
      draw: function () {
        ctx.beginPath();
        ctx.globalAlpha = 1;
        ctx.fillStyle = this.color;
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.fill();
      },
      //小球移动
      move: function () {
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.x <= 3 || this.x > canvas.width - 3) {
          this.speedX *= -1;
        }
        if (this.y <= 3 || this.y >= canvas.height - 3) {
          this.speedY *= -1;
        }
      }
    };
    var balls = [];
    for (var i = 0; i < 250; i++) {
      var ball = new Ball();
      balls.push(ball);
    }
    main();
  
    function main() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      mouseLine();
      drawLine();
      window.requestAnimationFrame(main);
    }
    var mouseX;
    var mouseY;
  
    canvas.onmousemove = function (ev) {
      mouseX = ev.offsetX;
      mouseY = ev.offsetY;
    }
  
    //连线
    function drawLine() {
  
  
      for (var i = 0; i < balls.length; i++) {
        balls[i].draw();
        balls[i].move();
        for (var j = 0; j < balls.length - 120; j++) {
          var i_dot = balls[i];
          var j_dot = balls[j];
          if (i !== j) {
            if ((i_dot.x - j_dot.x) < 85 && (i_dot.y - j_dot.y) < 85 && (i_dot.x - j_dot.x) > -85 && (i_dot.y - j_dot.y) > -85) {
              ctx.beginPath();
              ctx.moveTo(balls[i].x, balls[i].y);
              ctx.lineTo(balls[j].x, balls[j].y);
              ctx.strokeStyle = "#82f8ff";
              ctx.globalAlpha = 0.3;
              ctx.stroke();
            }
          }
        }
      }
    }
  
    //鼠标移动连线
    function mouseLine() {
      for (var i = 0; i < balls.length; i++) {
  
        if (Math.sqrt(Math.pow((balls[i].x - mouseX), 2) + Math.pow((balls[i].y - mouseY), 2)) < 65) {
          ctx.beginPath();
          ctx.moveTo(balls[i].x, balls[i].y);
          ctx.lineTo(mouseX, mouseY);
          ctx.strokeStyle = "#cbfcff";
          ctx.globalAlpha = 0.8;
          ctx.stroke();
        }
      }
    }
  
    function randomNum(m, n) {
      return Math.floor(Math.random() * (n - m + 1) + m);
    }
  
  }
  