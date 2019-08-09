creatStar(id, starscolor, starsamount, starsradius, movrange, speed, trailing) {
  let canvas = document.getElementById(id)
  let ctx = canvas.getContext('2d'),
    w = canvas.width = canvas.offsetWidth,
    h = canvas.height = canvas.offsetHeight,
    hue = starscolor, //230
    stars = [],
    count = 0,
    maxStars = starsamount; //星星数量
  let canvas2 = document.createElement('canvas'),
    ctx2 = canvas2.getContext('2d');
  canvas2.width = 100;
  canvas2.height = 100;
  let half = canvas2.width / 2,
    gradient2 = ctx2.createRadialGradient(half, half, 0, half, half, half);
  gradient2.addColorStop(0.025, '#CCC');
  gradient2.addColorStop(0.1, 'hsl(' + hue + ', 61%, 33%)');
  gradient2.addColorStop(0.25, 'hsl(' + hue + ', 64%, 6%)');
  gradient2.addColorStop(1, 'transparent');
  ctx2.fillStyle = gradient2;
  ctx2.beginPath();
  ctx2.arc(half, half, half, 0, Math.PI * 2);
  ctx2.fill();

  // End cache

  function random(min, max) {
    if (arguments.length < 2) {
      max = min;
      min = 0;
    }

    if (min > max) {
      let hold = max;
      max = min;
      min = hold;
    }

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function maxOrbit(x, y) {
    let max = Math.max(x, y),
      diameter = Math.round(Math.sqrt(max * max + max * max));
    return diameter / movrange;
    //星星移动范围，值越大范围越小，
  }

  let Star = function () {

    this.orbitRadius = random(maxOrbit(w, h));
    this.radius = random(starsradius, this.orbitRadius) / 8;
    //星星半径大小
    this.orbitX = w / 2;
    this.orbitY = h / 2;
    this.timePassed = random(0, maxStars);
    this.speed = random(this.orbitRadius) / speed;
    //星星移动速度
    this.alpha = random(2, 10) / 10;

    count++;
    stars[count] = this;
  };

  Star.prototype.draw = function () {
    let x = Math.sin(this.timePassed) * this.orbitRadius + this.orbitX,
      y = Math.cos(this.timePassed) * this.orbitRadius + this.orbitY,
      twinkle = random(10);

    if (twinkle === 1 && this.alpha > 0) {
      this.alpha -= 0.05;
    } else if (twinkle === 2 && this.alpha < 1) {
      this.alpha += 0.05;
    }

    ctx.globalAlpha = this.alpha;
    ctx.drawImage(canvas2, x - this.radius / 2, y - this.radius / 2, this.radius, this.radius);
    this.timePassed += this.speed;
  }

  for (let i = 0; i < maxStars; i++) {
    new Star();
  }
  let bgColor = ctx.createRadialGradient(w / 2, h / 2, h / 5, w / 2, h / 2, h);
  // bgColor.addColorStop(0, "#003a8d");
  // bgColor.addColorStop(1, "#08122c");
  bgColor.addColorStop(0, "#0D183D");
  bgColor.addColorStop(1, "#0D183D");

  function animation() {
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = trailing; //尾巴
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    for (let i = 1, l = stars.length; i < l; i++) {
      stars[i].draw();
    }
    window.requestAnimationFrame(animation);
  }

  animation();
}